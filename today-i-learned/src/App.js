import "./App.css";
import "./style.css";
import FactsList from "./components/facts-list/factslist";
import NewFactForm from "./components/fact-form/factform";
import CategoriesDisplay from "./components/categories/categories";
import Loader from "./components/loader/loader";
import { useEffect, useState } from "react";
import Header from "./components/header/header";
import supabase from "./api/supabase";
import animationData from "./assets/lottie/web-design.json";
import AnimationLottie from "./components/lottie/lottie";

function App() {
  const [facts, setFacts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    async function getFacts() {
      setIsLoading(true);

      let query = supabase.from("facts").select("*");

      if (currentCategory !== "all")
        query = query.eq("category", currentCategory);

      let { data: facts } = await query.order("votesInteresting", {
        ascending: false,
      });
      setFacts(facts);
      setIsLoading(false);
    }
    getFacts();
  }, [currentCategory]);

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      ) : null}

      <main className="main">
        <CategoriesDisplay setCurrentCategory={setCurrentCategory} />
        {isLoading ? (
          <Loader />
        ) : (
          <FactsList facts={facts} setFacts={setFacts} />
        )}
        <AnimationLottie animationPath={animationData} />
      </main>
    </>
  );
}

export default App;
