import style from './Navigation.module.css'
export default function Navigation()
{
    
    return( 

                        <nav className={style.navigation}>

                            <div >  
                            <img src="..\public\images\brand_logo.png" alt="" />
                            </div>

                            <ul>
                            <li href="#">Menu</li>
                            <li href="#">Shop</li>
                            <li href="#">Contact</li>
                            <li href="#">Loacation</li>
                            </ul>

                        </nav> 
      
      );
}