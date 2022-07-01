const getInicioContent = async () => {
    const response = await fetch(`${getUrlBase()}/api/inicio`);
    const inicio = await response.json();
    return inicio;
}