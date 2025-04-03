import Information from "@/components/svgs/information";
import Mail from "@/components/svgs/mail";


function AdditionalInformationButtons() {
  return (
    <div className="flex gap-[2rem]">
      <button className="orange-hover flex items-center gap-1">
        <Information />
        Shipping
      </button>
      <button className="orange-hover flex items-center gap-2 capitalize">
        <Mail />
        Ask About This Product
      </button>
    </div>
  );
}

export default AdditionalInformationButtons;
