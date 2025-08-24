import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-5 text-left"
      >
        <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
        <span className="text-brand-purple">
          {isOpen ? <FiMinus size={24} /> : <FiPlus size={24} />}
        </span>
      </button>
      <div
        // Kľúčová časť pre animáciu - meníme max-height
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="pt-0 pb-5 text-slate-400">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

export default AccordionItem;