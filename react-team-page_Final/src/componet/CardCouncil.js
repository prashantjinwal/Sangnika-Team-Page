import React from "react";

function cardcouncil (props){
    return(
      
        <div className="mt-2 mx-2 ">
            <div className="flex justify-center">
        <img className="h-[7rem]" src={props.src} />
           </div>
        <section className=" text-white text-md flex justify-center flex-col gap-0.5">
            
        <span>{props.name}</span>
        <button className="p-1 bg-[#62C6FF] text-black font-semibold ">{props.post}</button>
       
  
          <a href={props.linkdin} target="_blank"> 
          <span className=" flex justify-center ">
                   <svg
                    className="w-[24px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    viewBox="0 0 38 38"
                    fill="none"
                  >
                    <path d="M4 1.99902H34V32.999H4V1.99902Z" fill="#BCD1D9" />
                    <path
                      d="M34.8503 0.370117H3.12776C1.67419 0.370117 0.493164 1.56766 0.493164 3.03775V34.7025C0.493164 36.1726 1.67419 37.3701 3.12776 37.3701H34.8503C36.3039 37.3701 37.4932 36.1726 37.4932 34.7025V3.03775C37.4932 1.56766 36.3039 0.370117 34.8503 0.370117ZM6.19182 32.0844V14.4268H11.684V32.0844H6.19182ZM8.93379 12.0152C7.17464 12.0152 5.7541 10.5864 5.7541 8.83552C5.7541 7.08463 7.17464 5.65583 8.93379 5.65583C10.6847 5.65583 12.1135 7.08463 12.1135 8.83552C12.1135 10.5947 10.6929 12.0152 8.93379 12.0152ZM32.2322 32.0844H26.7483V23.4951C26.7483 21.4469 26.707 18.8123 23.899 18.8123C21.0414 18.8123 20.6037 21.0422 20.6037 23.3465V32.0844H15.1197V14.4268H20.3807V16.8384H20.455C21.19 15.4509 22.9822 13.9891 25.6499 13.9891C31.1999 13.9891 32.2322 17.6478 32.2322 22.4049V32.0844Z"
                      fill="#0A66C2"
                    />
                  </svg>
          </span>
          </a>
  
          <span className="cursor-pointer"  >
          <svg
                  className="w-[16px] left inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <path
                    d="M29.6376 21.5702L23.075 18.7576C22.7947 18.6381 22.4831 18.613 22.1872 18.6859C21.8913 18.7588 21.6271 18.9258 21.4343 19.1619L18.528 22.7128C13.9669 20.5622 10.2962 16.8915 8.14564 12.3303L11.6965 9.42404C11.933 9.23166 12.1004 8.96746 12.1734 8.67142C12.2463 8.37539 12.2209 8.06364 12.1008 7.78339L9.28824 1.22077C9.15647 0.918663 8.92341 0.672001 8.62925 0.523318C8.3351 0.374636 7.99828 0.333253 7.67688 0.406305L1.58303 1.81258C1.27316 1.88414 0.996695 2.05861 0.798756 2.30752C0.600817 2.55643 0.493093 2.86509 0.493164 3.18311C0.493164 18.2127 12.675 30.3711 27.6811 30.3711C27.9993 30.3713 28.3081 30.2636 28.5571 30.0657C28.8061 29.8677 28.9807 29.5912 29.0523 29.2812L30.4585 23.1874C30.5311 22.8644 30.4888 22.5262 30.339 22.2311C30.1892 21.9359 29.9412 21.7022 29.6376 21.5702Z"
                    fill="#6EBF63"
                  />
                </svg>
                <span className="text-sm text-gray-400" href="tel:+919182508492" >{props.ph}</span>
          </span>
  
  
  
  
        </section>
  
      </div>
        
        
      
    )
}




export default cardcouncil;