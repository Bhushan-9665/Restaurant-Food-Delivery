import { Card, Divider, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuItemCard from './MenuItemCard';

const category = [
  "Thali",
  "starter",
  "indian Main Course",
  "Rice And Biryani",
  "Breads",
  "Dessert",
  "Drinks",
];

const foodType = [
  {label:"All", value:"All"},
  {label: "Vegetarian Only", value:"vegetarian Only"},
  {label: "Non Vegetarian", value:"non vegetarian"},
  {label: "Seasonal", value:"seasonal"},
];

const menu = [
  1,1,1,1,1,1,1
]

const Restorent = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedFoodType, setSelectedFoodType] = useState("all");
  

  const handleFilter= (e)=>{
    console.log(e.target.value, e.target.name)
  }
  // const handleCategoryChange= ()=>{
  //   console.log('selected Category', selectedCategory)
  // }
  return (
    <div className='px-5 lg:px-20'>

      <section>
        <h3 className='text-gray-500 py-2 mt-10'>
          {`Home/india/vishwaraj food/2/order online`}
        </h3>

        <div>
          <img className='w-full h-[40vh] object-cover' src="https://novotelbangkokfutureparkrangsit.com/wp-content/uploads/sites/253/2023/02/Maharaja-100.jpg" alt="food" />
        </div>
        <div>
          <h1 className='text-4xl py-3 font-semibold '>{`Vishwaraj Food`}</h1>
          <p className='text-gray-400'>{`Test the Convenience : Food, Fast and Delivered`}</p>
          <p className='py-3 text-orange-300'>Open To 10:30 AM To 12:00 Midnight (Today)</p>
        </div>
      </section>
      <Divider />

      <section className='pt-[2rem] lg:flex relative'>
        <div className='space-y-10 lg:w-[20%] '>
          <Card className='space-y-5 lg:sticky top-28 p-5'>
            <div>
              <Typography sx={{paddingBottom:"1rem"}} variant='h5'>
                Category
              </Typography>

              <FormControl component={"fieldset"}>

                <RadioGroup name='category' value={selectedCategory} onChange={handleFilter}>

                  {category.map((item)=> <FormControlLabel value={item} control={<Radio/>} label={item} sx={{color:'gray'}}/>)}

                </RadioGroup>

              </FormControl>

            </div>
            <Divider/>
            <div>
              <Typography sx={{paddingBottom:"1rem"}} variant='h5'>
                Food Type
              </Typography>

              <FormControl className='py-10 space-y-5' component={"fieldset"}>

                <RadioGroup  value={selectedFoodType} onChange={handleFilter} name='food_Type' > 
                  {foodType.map((item)=> <FormControlLabel value={item.value}  control={<Radio/>} key={item.value} label={item.label} sx={{color:'gray'}}/>)}
                  
                </RadioGroup>

              </FormControl>

            </div>

          </Card>

        </div>

        <div className='lg:w-[80%] space-y-5 lg:pl-10'>
          {menu.map((item)=> <MenuItemCard item={item}/>)}
        </div>

      </section>
      
      
    </div>
  )
}

export default Restorent
