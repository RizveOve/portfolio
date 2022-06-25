import "./portfolioList.scss"

export default function PortfolioList(key, title, id, setSelected) {

  return (
    <li className= {key.active ? "portfolioList active" : "portfolioList"} onClick= {()=> key.setSelected(key.id)}>
        {key.title}
    </li>
  )
}
