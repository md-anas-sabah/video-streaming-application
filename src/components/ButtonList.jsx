import Button from "./Button";

const buttonList = [
  "All",
  "Live",
  "Gaming",
  "Anime",
  "Songs",
  "Soccer",
  "Cricket",
  "Cooking",
  "Computer Programing",
  "Manga",
  "CSS",
  "JavaScript",
];

const ButtonList = () => {
  return (
    <div className="flex ">
      {buttonList.map((button) => {
        return (
          <div className="">
            <Button name={button} />
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
