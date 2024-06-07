import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { categoriseIngredients } from '../util/categoriseIngredients';

const MenuCard = ({ item }) => {
  const handleCheckBoxChange = (value) => {
    console.log(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    console.log("Form submitted");
  };

  const categorisedIngredients = categoriseIngredients(item.ingredients);

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
        <form onSubmit={handleSubmit}>
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
