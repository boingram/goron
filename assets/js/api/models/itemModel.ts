export default interface Item {
  id: string;
  name: string;
  upgradeNames: string[];
  image: string;
  upgradeImages: string[];
  level: number;
  maxLevel: number;
}
