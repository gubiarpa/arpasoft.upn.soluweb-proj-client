window.onload = async () => {
    await Promise.all([
        buildProducts('#servicios-container'),
        buildInicio()
    ]);
}
