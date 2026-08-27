import { serviceCategories } from "@/lib/data/serviceCategories";
import { ServiceCard } from "./ServiceCard";
import {
  SoftwareEngineeringIcon,
  AiIcon,
  ProductDesignIcon,
  MobileIcon,
  CloudIcon,
  QualityIcon,
} from "./ServiceIcons";

const [
  softwareEngineering,
  aiGenerativeAi,
  productDesign,
  mobileDevelopment,
  cloudInfrastructure,
  qualityEngineering,
] = serviceCategories;

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-6">
      <ServiceCard
        category={softwareEngineering}
        icon={SoftwareEngineeringIcon}
        variant="primary"
        className="md:col-span-2 lg:col-span-3"
      />
      <ServiceCard
        category={aiGenerativeAi}
        icon={AiIcon}
        variant="primary"
        dark
        className="md:col-span-2 lg:col-span-3"
      />

      <ServiceCard
        category={productDesign}
        icon={ProductDesignIcon}
        variant="compact"
        className="lg:col-span-2"
      />
      <ServiceCard
        category={mobileDevelopment}
        icon={MobileIcon}
        variant="compact"
        className="lg:col-span-2"
      />
      <ServiceCard
        category={cloudInfrastructure}
        icon={CloudIcon}
        variant="compact"
        className="md:col-span-2 lg:col-span-2"
      />

      <ServiceCard
        category={qualityEngineering}
        icon={QualityIcon}
        variant="wide"
        dark
        className="md:col-span-2 lg:col-span-6"
      />
    </div>
  );
}
