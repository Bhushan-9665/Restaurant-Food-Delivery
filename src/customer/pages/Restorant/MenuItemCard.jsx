import { Accordion, AccordionDetails, AccordionSummary, Button, Card, Checkbox, Divider, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MenuItemCard = (item) => {
    const handleCheckBoxChange = (value) => {
        console.log('value')
    }

    const fragments = [
      {
        category: "Nuts And Seeds",
        ingredients: ["Cashes", "Cereals", "Seeds"]
      },
      {
        category: "Protein",
        ingredients: ["Protein", "Ground Beefs","Bacon Strips"]
      },
      
    ]
  return (
    // <Card className='p-5 lg:flex item-center justify-between box'>
    //     <div className='lg:flex item-center lg:space-x-5'>
    //         <img className='w-[7rem] h-[7rem] object-cover' src="https://th.bing.com/th/id/OIP.XSCo5S6kP3o-7-jVqH4vGgHaE8?rs=1&pid=ImgDetMain" alt="Dosa" />

    //         <div className='space-x-1 lg:space-x-5 lg:max-w-2xl'>
    //             <p className='font-semibold text-xl'>{`Pizza`}</p>
    //             <p>₹{`200`}</p>
    //             <p className='gray-400'>
    //               `rice, dosa, chutney, sauce, cheese`
    //             </p>
    //         </div>
    //     </div>
    //   <div>
    //     <Button onClick='handleClickToCard'>
    //         Add To Card
    //     </Button>
    //   </div>

      

    // </Card>
    <div>
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center m-5 ">
              <img className="w-[7rem] h-[7rem] object-cover rounded-md" src="https://images5.alphacoders.com/357/thumb-1920-357914.jpg" alt="" />
            </div>
            <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
              <p className='font-semibold text-xl m-5'>Pizza</p>
              <p className='m-5'>₹499</p>
              <p className='gray-400 m-5'>A delight for veggie lovers! Choose from our wide range of delicious vegetarian pizzas, it's softer and tastier</p>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className='flex gap-5 flex-wrap'> 
              {
                fragments.map((item) =>
                  <div>
                    <p>{item.category}</p>
                    <FormGroup>
                {
                    item.ingredients.map((item) => <FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>} label={item} />)
                    
                }
                </FormGroup>
                </div>
                )
              }
            </div>
            <div className='pt-5'>
            <Button type='submit' variant='contained' disabled={false} className=''>{true?"Add to Card": "Out of Stock"}</Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
    
    

)
}

export default MenuItemCard
