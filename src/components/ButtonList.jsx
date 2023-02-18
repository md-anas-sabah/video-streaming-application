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
    <div className="flex px-10 ">
      {buttonList.map((button) => {
        return (
          <div className="">
            <Button name={button} key={button} />
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
