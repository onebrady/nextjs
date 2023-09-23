import Image from 'next/image'
import React from 'react'

type HeaderProps = {
    photoUrl: string;
};

function GetImage({ photoUrl }: HeaderProps) {
  return (
    <Image
      alt="background"
      src={photoUrl}
      width={2560}
      height={1440}
      className='root-bg'
      sizes='100vw'
      quality={75}
      />
  )
}

export default GetImage
