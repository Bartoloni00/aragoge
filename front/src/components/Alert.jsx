export const Denied = () => {
  return (
    <div class="absolute bottom-5 right-5 px-4 py-4 w-[300px] text-red-800 bg-red-300 rounded shadow-lg shadow-red-500/50" role="alert">
        <p>Haz salido correctamente!</p>
    </div>
  )
}

export const Success = () => {
    return (
        <div class="absolute bottom-5 right-5 px-4 py-4 w-[300px] text-green-800 bg-green-300 rounded shadow-lg shadow-green-500/50" role="alert">
            <p>Haz ingresado correctamente!</p>
        </div>
    )
}

export default {
    Denied,
    Success
}