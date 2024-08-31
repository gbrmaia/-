'use client'

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

export default function Landing() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="lg:w-[50%] h-full p-8 flex justify-between items-center">
        <div className="lg:w-[70%]">
          <h2 className="scroll-m-20 text-xl sm:text-2xl font-semibold tracking-tight">
            Gabriel Maia
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Desenvolvedor Full Stack focado em construir produtos
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            com atenção redobrada aos detalhes
          </p>
          <Button
            onClick={() => window.open('https://www.google.com/maps/place/Teres%C3%B3polis', '_blank')}
            variant="link"
            className='text-xs sm:text-sm text-muted-foreground hover:text-primary -ml-4'>
            <CiGlobe size={'16'} className='mr-1' />
            Teresópolis, Brasil
          </Button>
          <div className="flex space-x-4 mt-2">
            <Button variant={"ghost"} size="icon" className="text-4xl p-2 rounded-75">
              <FaWhatsapp />
            </Button>
            <Button variant={"ghost"} size="icon" className="text-4xl p-2 rounded-75">
              <FaGithub />
            </Button>
            <Button variant={"ghost"} size="icon" className="text-4xl p-2 rounded-75">
              <FaLinkedin className='text-primary' />
            </Button>
          </div>
        </div>
        <div className="w-[50%] lg:w-[25%] md:w-[35%] sm:w-[50%] xs:w-[75%]">
          <Image
            src="/fotoperfil.png"
            alt="Gabriel Maia"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="lg:w-[50%] h-full p-8 flex justify-between items-center">
        <div className="lg:w-[70%]">
          <h2 className="scroll-m-20 text-xl sm:text-2xl font-semibold tracking-tight">
            Sobre mim
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground text-wrap">
          Profissional dedicado e motivado, atuo como Suporte Interno na Alterdata Software, com sólida experiência em API, Postman, testes de qualidade, e resolução de problemas técnicos.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground text-wrap">
          Estudante de Ciência da Computação, foco em Inteligência Artificial, Chatbots, desenvolvimento web com tecnologias como React, TypeScript, MongoDB, e frameworks Next.js e NestJS.
          </p>
        </div>
      </div>
    </main>
  );
}
