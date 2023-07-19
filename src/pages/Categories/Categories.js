import React, {useEffect} from 'react';
import "./Categories.scss";
import { useMealContext } from '../../context/mealContext';
import { useParams } from 'react-router-dom';
import { startFetchMealByCategory } from '../../actions/mealsActions';

const CategoryPage = () => {
  const {name} = useParams();
  const { categoryMeals, dispatch, categories } = useMealContext();
  let catDescription = "";

  if(categories){
    categories.forEach(category => {
      if(category?.strCategory === name) catDescription = category?.strCategoryDescription;
    })
  }

  useEffect(() => {
    startFetchMealByCategory(dispatch, name);
  }, [name, dispatch]);

  return (
    <main className='main-content py-5'>
      <div className='container'>
        <div className='cat-description px-4 py-4'>
          <h2 className='text-orange fw-8'>{name}</h2>
          <p className='fs-18 op-07'>{catDescription}</p>
        </div>
      </div>
    </main>
  )
}

export default CategoryPage
