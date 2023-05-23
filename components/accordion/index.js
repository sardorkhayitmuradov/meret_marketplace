import Image from 'next/image';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'react-headless-accordion';
const CustomAccordion = ({
  title,
  accordionClassName,
  accordionHeaderClassName,
  accordionBodyClassname,
  accordionImage,
  active,
  children,
}) => {
  return (
    <>
      <Accordion
        transition={{
          duration: '500ms',
          transition: true,
          timingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
        }}
        className={`${accordionClassName}`}
      >
        <AccordionItem isActive={active ? active : false}>
          {({ open }) => (
            <>
              <AccordionHeader
                as={'div'}
                className={`${accordionHeaderClassName}`}
              >
                <div className='flex items-center justify-between'>
                  {title}
                  <Image src={accordionImage} alt="heart" width={20} height={20} className={`${open && "-rotate-180"} duration-300`} />
                </div>
              </AccordionHeader>

              <AccordionBody>
                <div
                  className={`${accordionBodyClassname}`}
                >
                  {children}
                </div>
              </AccordionBody>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default CustomAccordion;