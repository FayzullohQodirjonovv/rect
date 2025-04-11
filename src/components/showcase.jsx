import React from 'react';
import award from '../assets/award.png';
const Showcase = () => {
    return (
        <div>
            <div className="hero__boxes text-center">
                <h2 className='font-bold text-[45px] mt-[50px] mb-[20px]'> <span className='text-[blue]'>Dasturlashni</span> biz bilan qulay  <br />
                muhitda o‘rganing</h2>
                <div className="hero__title">
                    <p className='text-center'>Khan Academy - bu siz izlagan akademiya bo’lib, unda siz juda qisqa muddatda istalgan <br />
                    dasturlash sohasida Junior darajasiga chiqa olasiz! </p>
                </div>
                <div className="buttons gap-3 flex justify-center mt-[20px]">
                <button className='button1'>Boshlash</button>
                <div className="btn">
                <button className='button2'>GitHub</button>
                </div>
         
                </div>
                <div className="imgase flex justify-center h-[70px] mt-[20px]">
                    <img src={award} alt="" />
                </div>
            </div>

        </div>
    )
}


export default Showcase