
window.onload = async () => {
    const response = await fetch('https://opticas-dyc.herokuapp.com/api/aplication');
    const { totalRows, aplications } = await response.json()
    console.log(aplications)
}
