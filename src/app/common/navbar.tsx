import { FiHome } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="flex min-w-3 bg-transparent p-4 rounded-lg">
          <FiHome
            style={{
              color: "#444444",
              fontSize: "18px",
              margin: "5px",
            }}
          />
          <span className="text-xl text-black">Homestead</span>
        </div>
      </div>
      <div className="navbar-end">
        {/* Dashboard menu */}
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Dashboard</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Financial Figures</a>
                </li>
                <li>
                  <a>YoY</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>

        {/* Transactions menu */}
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Transactions</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Create</a>
                </li>
                <li>
                  <a>Upload batch</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
