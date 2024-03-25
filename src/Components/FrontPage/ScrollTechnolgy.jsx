import React from 'react'

const dataTechnology = [
    {
     id:1,
     name: "UI-UX DESIGN CONCEPTS",
     description: "Having understood your requirements we embark on a creative journey to develop design ideas. We utilize collaborative brainstorming and prototyping, which in return breathes life into the concepts and we further refine them with valuable user feedback. This iterative process ensures that our final designs are user-centered and all options have been explored to deliver cutting-edge solutions that engage and convert. Having understood your requirements we embark on a creative journey to develop design ideas. We utilize collaborative brainstorming and prototyping, which in return breathes life into the concepts and we further refine them with valuable user feedback. This iterative process ensures that our final designs are user-centered and all options have been explored to deliver cutting-edge solutions that engage and convert."
    }
]

const ScrollTechnolgy = () => {
  return (
    <div className='text-white bg-black'>
        <div className='w-full px-[50px]'>
            <div className='w-full flex'>
                {dataTechnology?.map((item) => (
                    <>
                      <div className='w-1/2'>
                        <p className='font-custom text-[45px] w-[348px] leading-[115%]'>{item?.name}</p>
                      </div>
                      <div className='w-1/2'>
                        <p className='w-[665px] font-custom1 text-[16px]'>{item.description}</p>
                      </div>
                    </>   
                ))}
            </div>
        </div>
    </div>
  )
}

export default ScrollTechnolgy