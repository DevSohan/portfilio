
enum FilterBy{
    Stack = "stack",
    Language = "language"
}

interface FilterTypes{
    filterBy:FilterBy
    filterByValue:string
}

const stacks = ["AR VR", "Data Science", "DevOps", "FullStack", "GIS", "iOS", "Project Management", "Wordpress"];
const languages = ["JavaScript", "PHP", "Python", "Swift"];

