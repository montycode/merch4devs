import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Map } from '@/components';
import { useGoogleAddress } from '@/hooks';


export const Success = () => {
    const { state } = useContext(AppContext);
    const { buyer } = state;
    const location = useGoogleAddress(buyer[0].address);
    console.log('BUYER::', buyer);

    return (
        <>
            <div className="pt-16">
                <div className="w-full bg-gray-100 py-16">
                    <div className="xl:flex lg:flex md:flex flex-wrap items-center container mx-auto px-6">
                        <div className="md:w-1/2 w-full rounded-r-lg">
                            <img src="https://tuk-cdn.s3.amazonaws.com/assets/components/newsletter/nl_2.png" className="h-full w-full object-cover rounded-r shadow" />
                        </div>
                        <div className="xl:w-5/12 lg:w-5/12 md:w-5/12 xl:pl-10 lg:pl-10 w-full xl:mx-0 lg:mx-0 mx-auto">
                            <h1 className="xl:text-5xl text-3xl mb-6 text-gray-800">Hola {`${buyer[0].fullName}`}, Gracias por tu compra!</h1>
                            <p className="text-xl mb-8 text-gray-600 leading-7">Tu pedido llegara de 3 a 5 dias habiles a tu locacion, gracias por unirte a {'<Merch4Devs/>'}.</p>
                            <div className="w-full flex bg-white px-5 justify-between rounded shadow xl:w-10/12 items-center">
                                <Map data={location} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
