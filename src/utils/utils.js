export function sliderValueToVideoTime(duration, sliderValue) {
    return Math.round(duration * sliderValue / 100)
}