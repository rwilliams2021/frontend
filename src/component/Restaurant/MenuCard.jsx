import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const ingredients = [
  {
    category: "Nuts and Seeds",
    ingredients: ["Cashews"]
  },
  {
    category: "Protein",
    ingredients: ["Ground Beef", "Bacon"]
  }
]

const MenuCard = () => {
  const handleCheckBoxChange = (value) => {
    console.log(value)
  }
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} id="panel-header" aria-controls="panel-content">
        <div className='lg:flex items-center justify-between'>
          <div className='lg:flex items-center lg:gap-5'>
            <img className='w-[7rem] h-[7rem] object-cover'
              src='https://cdn.pixabay.com/photo/2019/03/22/18/25/food-4073884_640.jpg' alt=''
            />
            <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
              <p className='font-semibold text-xl'>Curry</p>
              <p>€8.99</p>
              <p className='text-gray-400'>Nice food</p>
            </div>
          </div>

        </div>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className='flex gap-5 flex-wrap'>
            {
              ingredients.map((item) => (
                <div>
                  <p>{item.category}</p>
                  <FormGroup>
                    {
                    item.ingredients.map((item) => (
                      <FormControlLabel control={<Checkbox onChange={() =>handleCheckBoxChange(item)}
                      />} label={item} />
                    ))
                    }
                  </FormGroup>
                </div>
              ))
            }
          </div>
          <div className='pt-5'>
            <Button variant="contained" disabled={false} type="submit">{true?"Add to cart":"Out of Stock"}</Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  )
}

export default MenuCard
