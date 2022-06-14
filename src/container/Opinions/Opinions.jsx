import React, { useState }from 'react';
import { Headlines } from '../../components';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import './Opinions.scss';

const Opinions = () => {

  const testimonialsArr = [ 
    {
      name: "Radek & Karolina, menadżerowie, Polska",
      feedback: "Całe doświadczenie z Joga&Masaż Ciała&Umysłu jest niesamowite i słowa nigdy tego nie wyrażą. Razem z moją Karoliną regularnie odwiedzaliśmy Annę na masaże tajskie i zawsze było super. Po ciężkiej kontuzji, połączonej z pewnym stresującym okresem w zbyt zabieganym życiu, doświadczam wielu napięć. Dzięki niesamowitym umiejętnościom i talentom Anny w końcu znalazłem ulgę. Aha... a po sesji zawsze cieszę się filiżanką wspaniałej herbaty i rozmową o życiu. Gorąco polecam.",
    },
    {
      name: "Agnieszka, grafik, Polska",
      feedback: "Dzięki praktyce z Joga&Masaż Ciała&Umysłu czuję się o wiele lepiej, mam siłę i energię do pracy, i pokonywania codziennych trudności. Dzień rozpoczęty od ćwiczeń jest zawsze lepszy. Uspokajam się, radzę sobie ze stresem, mam ochotę działać, a radość mnie po prostu rozpiera od środka.",
    },
    {
      name: "Katarzyna, biolog z Islandii",
      feedback: "Wspaniały masaż, usuwa wszystkie blokady i zastoje w ciele i przywraca je do pełnej sprawności. Ania po jednej sesji wyleczyła mi kontuzję barku!",
    },
    {
      name: "Jula, piosenkarka, Polska",
      feedback: "Na kursie z Joga&Masaż Ciała&Umysłu nauczyłam się od Ani wspaniałej płynnej sekwencji ruchów. Ćwicząc codziennie po chociaż 15 minut można odczuć naprawdę zdumiewające efekty, ćwiczenia pomogły mi zdobyć większą świadomość i uważność ciała i oddechu, uspokoić się oraz pozbyć nadmiaru wody z organizmu ! Po niezbyt długim czasie wdrożonej w system dnia praktyki słyszałam od znajomych, że jakoś tak młodziej wyglądam i chyba schudłam ;) Polecam zarówno metodę jak i prowadzącą i jeszcze raz dziękuję za zdobytą wiedzę !",
    },
    {
      name: "René, menadżer, Szwajcaria",
      feedback: "Sesja masażu u Ani to prawdziwe przeżycie - podróż w głąb swojego wewnętrznego świata. W bardzo subtelny sposób przełamuje blokady i otwiera przestrzeń dla nowych wewnętrznych i zewnętrznych ruchów i doświadczeń.",
    },
    {
      name: "Gloria, stomatolog, Szwajcaria.",
      feedback: "Dziękuję Ani za wyjątkowe 3 dni, wprowadzenie i przewodnictwo w Joga&Masaż Ciała&Umysłu. To doświadczenie otworzyło dla mnie cudowną ścieżkę samoświadomości, którą teraz praktykuję prawie każdego dnia, kiedy tylko jest to możliwe. Ania przekazała swoją wiedzę z delikatnością i radosną jasnością, dzięki czemu moje ciało i umysł szybko nauczyły się integrować to, czego się nauczyłam. Dziękuję jej z całego serca za jej kochający sposób przekazania tego daru.",
    },
    {
      name: "Marta, farmaceutka, Polska.",
      feedback: "Fantastyczny kurs z Joga&Masaż Ciała&Umysłu, wspaniały czas. Dziękuję!",
    },
    {
      name: "Patrick, bankier, Szwajcaria.",
      feedback: "Anna od tak dawna jest moją zaufaną terapeutką. Naprawdę mogę polecić jej sesje dla dobrego samopoczucia fizycznego i psychicznego pod każdym względem!",
    }
  ]

  const handleClick = (index) => {
    console.log(index);
    setCurentIndex(index);
  }

  const [currentIndex, setCurentIndex ] = useState(0);

  const test = testimonialsArr[currentIndex];

  return (

    <section id='opinie'>
      <Headlines props={"Opinie"} /> 
        <div className="section-spaceing">
          <div className="app__opinions-content">
            
            { testimonialsArr.length && (
                <div  className="app__testimonial-item ">
                  <div className="app__next" onClick={() => handleClick(currentIndex === 0 ? testimonialsArr.length - 1 : currentIndex - 1)}>
                      <HiChevronLeft />
                  </div>
                  <div className="app__testimonial-content">
                    <div className="app__testimonial-quote">
                      {/* <img src={images.quote} alt="quote" /> */}
                      <p>" {test.feedback} "</p>
                      {/* <img src={images.quote} alt="quote" /> */}
                    </div>
                    <p className="app__name">{test.name}</p>
                  </div>
                  <div className="app__next" onClick={() => handleClick(currentIndex === testimonialsArr.length - 1 ? 0 : currentIndex + 1)}>
                      <HiChevronRight />
                  </div>
                </div>
            ) }
            
          </div>
        </div>
    </section>
  )
}

export default Opinions