"use client";
import Image from "next/image";
import React, { useState, useRef, createRef, useEffect } from "react";
import { ImageDown, X } from "lucide-react";
import { useScreenshot, createFileName } from "use-react-screenshot";


export default function ModalStoriesCompromisso({
  compromisso,
  isOpen,
  setIsOpen,
  close,
}) {
  const ref = createRef(null);

  const [fontSize, setFontSize] = useState(24)

  useEffect(() => {
    // Calcula o comprimento do texto e ajusta o tamanho da fonte
    const textLength = compromisso.length;
    if (textLength < 100) {
      setFontSize(24); // Defina o tamanho da fonte para texto curto
    } else if (textLength >= 100 && textLength < 200) {
      setFontSize(20); // Defina o tamanho da fonte para texto médio
    } else {
      setFontSize(16); // Defina o tamanho da fonte para texto longo
    }
  }, [compromisso]);

  const [image, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });

  const download = (
    image,
    { name = "EuApoioEsseCompromisso", extension = "png" } = {}
  ) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  return (
    <>
      <div
        className="fixed z-50 flex flex-col gap-2 items-center justify-center -bottom-full transition-all w-full h-full bg-white place-items-start rounded-t-3xl max-h-[80%]  data-[state=open]:bottom-0 my-2"
        data-state={isOpen ? "open" : "closed"}
      >
        <div className="flex flex-col">
        <button
            className="cursor-default"
            onClick={close}
          />
          <button
            className="absolute top-4 right-4 cursor-pointer bg-white rounded-full w-8 h-8 grid place-items-center shadow-md"
            onClick={close}
          >
            <X size={24} color="#5A007A" />
          </button>
          <h2 className="text-4xl font-bold text-purple">
            Compartilhar Compromisso!
          </h2>
          <p className="text-justify">
            Você está comprometido com uma causa importante? Quer compartilhar
            seu apoio e inspirar outros a se juntarem a você? Baixe nosso
            template de compartilhamento e espalhe a mensagem!
          </p>
          <button
            onClick={downloadScreenshot}
            className="flex gap-2.5 items-center py-2 px-6 justify-between bg-purple transition-colors hover:bg-[#8817b2]"
          >
            <p className="font-bold leading-6 transition-colors text-yellow">
              Baixa imagem
            </p>
            <ImageDown color="#FFD500" />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div
            ref={ref}
            className="flex overflow-hidden scale-[0.6] xmd:scale-100 flex-col relative max-w-[360px] h-[640px] gap-2 bg-purple shadow-md"
          >
            <div className="flex">
              <svg
                width="72"
                height="72"
                viewBox="0 0 196 196"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Check">
                  <g id="check-circle">
                    <path
                      id="Vector"
                      d="M151.333 93.0933V98C151.327 109.501 147.603 120.692 140.716 129.903C133.83 139.114 124.151 145.853 113.122 149.114C102.093 152.375 90.3053 151.983 79.5171 147.998C68.7289 144.012 59.5181 136.646 53.2584 126.998C46.9987 117.349 44.0255 105.936 44.7822 94.4603C45.539 82.9843 49.9851 72.0604 57.4575 63.3177C64.9298 54.575 75.0281 48.482 86.2463 45.9474C97.4645 43.4128 109.201 44.5724 119.707 49.2533M151.333 55.3334L98 108.72L82 92.72"
                      stroke="#FFD500"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex flex-col px-10 gap-6">
              <h2 className="text-4xl font-bold text-yellow leading-7">
                É Nosso Compromisso!
              </h2>
              <div className="flex flex-row justify-between gap-2">
                <div className=" flex items-center justify-center bg-yellow rounded-xl w-[112px] h-[32px]">
                  <p className="font-bold text-purple">1</p>
                </div>
                <div className=" flex items-center justify-center bg-yellow rounded-xl w-[112px] h-[32px]">
                  <p className="font-bold text-purple">1</p>
                </div>
                <div className=" flex items-center justify-center bg-yellow rounded-xl w-[112px] h-[32px]">
                  <p className="font-bold text-purple">1</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-6 relative m-4">
              <div
                className="flex items-center max-h-[250px] bg-yellow w-full rounded-xl py-2"
                style={{ fontSize: `${fontSize}px` }}
              >
                <p className="text-center leading-none pl-10 pr-10 text-purple font-bold">
                  {compromisso}
                </p>
              </div>
            </div>
            <div>
              <div>
                <Image
                  src="/CaraPequeno.png"
                  width={150}
                  height={250}
                  alt="Pessoa"
                  className="absolute bottom-0 -left-2"
                />
                <Image
                  src="/LogoBalao.png"
                  width={75}
                  height={75}
                  alt="Pessoa"
                  className="absolute -right-2 bottom-[140px]"
                />
              </div>

              <div className="absolute bottom-0 bg-yellow rounded-t-lg p-2">
                <div className="gap-1">
                  <p className="text-purple text-center text-lg font-bold leading-none">
                    #UnifesspaDemocratica
                  </p>
                  <p className="text-purple text-center text-lg font-bold">
                    #EuApoioEsseCompromisso
                  </p>
                </div>
                <p className="text-purple text-center text-sm leading-3 px-6 py-1">
                  Aproveite também para visitar nosso site e conhecer outros
                  compromissos!
                </p>
                <p className="text-purple text-center text-sm font-bold py-1">
                  unifesspademocratica.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}