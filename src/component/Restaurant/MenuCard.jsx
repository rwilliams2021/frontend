import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { categoriseIngredients } from '../util/categoriseIngredients';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../State/Cart/Action';

const MenuCard = ({ item }) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const dispatch = useDispatch();

  const categorisedIngredients = categoriseIngredients(item.ingredients);

  const handleAddItemToCart = (event) => {
    event.preventDefault();
    const reqData = {
      token: localStorage.getItem("jwt"),
      cartItem: {
        foodId: item.id,
        quantity: 1,
        ingredients: selectedIngredients,
      }
    }
    dispatch(addItemToCart(reqData));
  }

  const handleCheckBoxChange = (itemName) => {
    setSelectedIngredients(prevSelectedIngredients => {
      if (prevSelectedIngredients.includes(itemName)) {
        return prevSelectedIngredients.filter(item => item !== itemName);
      } else {
        return [...prevSelectedIngredients, itemName];
      }
    });
  };

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel-header" aria-controls="panel-content">
        <div className='lg:flex items-center justify-between'>
          <div className='lg:flex items-center lg:gap-5'>
            <img
              className='w-[7rem] h-[7rem] object-cover'
              src={item.images[0]}
              alt={item.name}
            />
            <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
              <p className='font-semibold text-xl'>{item.name}</p>
              <p>€{item.price}</p>
              <p className='text-gray-400'>{item.description}</p>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form onSubmit={handleAddItemToCart}>
          <div className='flex gap-5 flex-wrap'>
            {
              Object.keys(categorisedIngredients).map((category) => (
                <div key={category}>
                  <p>{category}</p>
                  <FormGroup>
                    {
                      categorisedIngredients[category].map((ingredient, idx) => (
                        <FormControlLabel
                          key={idx}
                          control={<Checkbox onChange={() => handleCheckBoxChange(ingredient.name)} />}
                          label={ingredient.name}
                        />
                      ))
                    }
                  </FormGroup>
                </div>
              ))
            }
          </div>
          <div className='pt-5'>
            <Button variant="contained" disabled={false} type="submit">
              {true ? "Add to cart" : "Out of Stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
