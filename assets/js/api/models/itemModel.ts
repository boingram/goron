export default interface Item {
  id: number;
  name: string;
  upgradeNames: string[];
  image: string;
  upgradeImages: string[];
  level: number;
  maxLevel: number;
}
