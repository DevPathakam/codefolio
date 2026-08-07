import RoughMindMap from "@/components/client/about/RoughMindMap";
import { tags } from "@/constants/about";

export default function AboutPage() {
  return <RoughMindMap data={tags} />;
}
