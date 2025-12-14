import { NavLink } from "react-router-dom";
import { useBudget } from "../contexts/BudgetContext";
export default function Header() {
    const navLinks = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Chi siamo",
            path: "/chi-siamo",
        },
        {
            title: "Prodotti",
            path: "/prodotti",
        }
    ]

    // custom hook
    const { budgetMode, setBudgetMode } = useBudget();

    return (
        <header className="navbar bg-body-tertiary px-5 py-4">
            
                <h1 className="">React Router Store</h1>
                <ul className="navbar-nav  flex-row gap-3">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavLink to={link.path}>
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <button className=""
                        onClick={() => setBudgetMode(!budgetMode)}
                >
                    {budgetMode ? "Modalità Budget Attiva" : "Modalità Budget Disattiva"}
                </button>
        </header>
    );
}