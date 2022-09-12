const Header = ({ handleChangeTheme }) => {
    return (
        <div className="header">
            <h1> Note Birds</h1>
            <button
                className="header__toggle-theme-btn"
                onClick={handleChangeTheme}
            >
                Toggle theme
            </button>
        </div>
    );
};

export default Header;
