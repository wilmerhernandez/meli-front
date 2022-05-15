import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import logo from "../../assets/resources/img/Logo_ML.png.png";
import search from "../../assets/resources/img/ic_Search@2x.png.png.png";
import { useEffect, useState } from 'react';

function Search() {

  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState('')

  useEffect(() => {
    const q = searchParams.get('q')
    if (!q) return
    setQuery(q)
  }, [searchParams])


  const onSubmit = (e) => {
    e.preventDefault()
    navigate(`/products?q=${query}`)
  }

  return (
    <div className="search">
      <div className="search__inner">    
        <a href="/" className="logo">
          <img
            src={logo}
            alt="logo Mercado libre"
          ></img>
        </a>
        <form className="search__bar" onSubmit={onSubmit}>
          <input
            className="search__bar-control"
            name="search"
            alt="search"
            placeholder="Nunca dejes de buscar"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <button type='submit' className="search__bar-action">
            <img
              src={search}
              alt="search Mercado libre"
            />
          </button>
        </form>
      </div>
    </div>
  );
}
export default Search;
