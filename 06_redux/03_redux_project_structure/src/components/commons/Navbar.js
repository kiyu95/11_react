const Navbar = () => {

    return (
        <div>
            <ul>
                <li><Navbar to="/">메인으로</Navbar></li>
                <li><Navbar to="/pokemons">포켓몬 목록 보기</Navbar></li>
            </ul>
        </div>
    )
}

export default Navbar;