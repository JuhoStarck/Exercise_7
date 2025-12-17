export type Weather = {
  weather: {
    icon: string
  }[]
  main: {
    temp: number
  }
  wind: {
    speed: number
    deg: number
  }
  name: string
}