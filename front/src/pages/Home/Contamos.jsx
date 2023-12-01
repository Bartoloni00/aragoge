import React from 'react'

const Contamos = () => {
  return (
    <section className="mt-4 mx-2">
        <h2 className="font-Cardo uppercase text-2xl text-center my-6">Contamos con...</h2>
        <div className="gap-[40px] mx-auto flex flex-col items-center md:flex-row px-4 md:px-2">
            <div className="bg-[#f2f2f2] rounded-lg border border-[#DA1641] shadow-md md:min-h-[550px] w-full">
                <div className="min-h-[150px] flex flex-col justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="88" height="70" viewBox="0 0 88 70" fill="none">
                        <path d="M35 45.9375H34.9973C34.9973 43.7254 35.1805 44.7439 23.3693 21.1217C20.9563 16.2969 14.0465 16.2873 11.6293 21.1217C-0.281641 44.9463 0.00273438 43.7951 0.00273438 45.9375H0C0 51.9777 7.83535 56.875 17.5 56.875C27.1647 56.875 35 51.9777 35 45.9375ZM17.5 24.0625L27.3438 43.75H7.65625L17.5 24.0625ZM87.4973 45.9375C87.4973 43.7254 87.6805 44.7439 75.8693 21.1217C73.4563 16.2969 66.5465 16.2873 64.1293 21.1217C52.2184 44.9463 52.5027 43.7951 52.5027 45.9375H52.5C52.5 51.9777 60.3354 56.875 70 56.875C79.6647 56.875 87.5 51.9777 87.5 45.9375H87.4973ZM60.1563 43.75L70 24.0625L79.8438 43.75H60.1563ZM72.1875 61.25H48.125V20.9521C51.3393 19.5453 53.7523 16.6482 54.4674 13.125H72.1875C73.3961 13.125 74.375 12.1461 74.375 10.9375V6.5625C74.375 5.35391 73.3961 4.375 72.1875 4.375H52.4508C50.4547 1.73359 47.317 0 43.75 0C40.183 0 37.0453 1.73359 35.0492 4.375H15.3125C14.1039 4.375 13.125 5.35391 13.125 6.5625V10.9375C13.125 12.1461 14.1039 13.125 15.3125 13.125H33.0326C33.7477 16.6469 36.1594 19.5453 39.375 20.9521V61.25H15.3125C14.1039 61.25 13.125 62.2289 13.125 63.4375V67.8125C13.125 69.0211 14.1039 70 15.3125 70H72.1875C73.3961 70 74.375 69.0211 74.375 67.8125V63.4375C74.375 62.2289 73.3961 61.25 72.1875 61.25Z" fill="#DA1641"/>
                    </svg>
                </div>
                <div className="text-center">
                    <h3 className="font-Cardo uppercase text-xl py-4">Entrenadores</h3>
                </div>
                <div className="p-2">
                    <p className="font-Roboto text-base text-center">En nuestra plataforma contamos con entrenadores altamente calificados, dedicados a guiar y motivar a nuestros clientes hacia el logro de sus metas fitness.</p>
                </div>
            </div>
            <div className="bg-[#f2f2f2] rounded-lg border border-[#DA1641] shadow-md md:min-h-[550px] w-full">
                <div className="min-h-[150px] flex flex-col justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="53" height="70" viewBox="0 0 53 70" fill="none">
                        <path d="M45.9375 8.75H35C35 3.92383 31.0762 0 26.25 0C21.4238 0 17.5 3.92383 17.5 8.75H6.5625C2.93945 8.75 0 11.6895 0 15.3125V63.4375C0 67.0605 2.93945 70 6.5625 70H45.9375C49.5605 70 52.5 67.0605 52.5 63.4375V15.3125C52.5 11.6895 49.5605 8.75 45.9375 8.75ZM26.25 5.46875C28.0684 5.46875 29.5312 6.93164 29.5312 8.75C29.5312 10.5684 28.0684 12.0312 26.25 12.0312C24.4316 12.0312 22.9688 10.5684 22.9688 8.75C22.9688 6.93164 24.4316 5.46875 26.25 5.46875ZM39.375 47.0312C39.375 47.6328 38.8828 48.125 38.2812 48.125H30.625V55.7812C30.625 56.3828 30.1328 56.875 29.5312 56.875H22.9688C22.3672 56.875 21.875 56.3828 21.875 55.7812V48.125H14.2188C13.6172 48.125 13.125 47.6328 13.125 47.0312V40.4688C13.125 39.8672 13.6172 39.375 14.2188 39.375H21.875V31.7188C21.875 31.1172 22.3672 30.625 22.9688 30.625H29.5312C30.1328 30.625 30.625 31.1172 30.625 31.7188V39.375H38.2812C38.8828 39.375 39.375 39.8672 39.375 40.4688V47.0312ZM39.375 20.7812C39.375 21.3828 38.8828 21.875 38.2812 21.875H14.2188C13.6172 21.875 13.125 21.3828 13.125 20.7812V18.5938C13.125 17.9922 13.6172 17.5 14.2188 17.5H38.2812C38.8828 17.5 39.375 17.9922 39.375 18.5938V20.7812Z" fill="#DA1641"/>
                    </svg>
                </div>
                <div className="text-center">
                    <h3 className="font-Cardo uppercase text-xl py-4">Terapeutas</h3>
                </div>
                <div className="p-2">
                    <p className="font-Roboto text-base text-center">En nuestra plataforma contamos con terapeutas comprometidos con tu bienestar emocional y mental. Los mismos están capacitados para proporcionar apoyo y orientación en momentos difíciles, ayudándote a encontrar el equilibrio necesario para una vida plena.</p>
                </div>
            </div>
            <div className="bg-[#f2f2f2] rounded-lg border border-[#DA1641] shadow-md md:min-h-[550px] w-full">
                <div className="min-h-[150px] flex flex-col justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="57" height="70" viewBox="0 0 57 70" fill="none">
                        <path d="M28.4237 2.07831C28.5331 2.72089 30.6249 14.9982 30.6249 19.6876C30.6249 26.838 26.8241 31.9376 21.205 33.9884L22.9687 66.541C23.0644 68.4141 21.5742 70 19.6874 70H10.9375C9.06443 70 7.56053 68.4277 7.65623 66.541L9.4199 33.9884C3.7871 31.9376 0 26.8243 0 19.6876C0 14.9845 2.09179 2.72089 2.20117 2.07831C2.63866 -0.697068 8.39451 -0.738084 8.74998 2.2287V21.5333C8.92771 21.9982 10.8144 21.9708 10.9375 21.5333C11.1289 18.0744 12.0175 2.50214 12.0312 2.14667C12.4824 -0.697068 18.1425 -0.697068 18.58 2.14667C18.6074 2.51581 19.4824 18.0744 19.6738 21.5333C19.7968 21.9708 21.6972 21.9982 21.8613 21.5333V2.2287C22.2167 -0.724412 27.9863 -0.697068 28.4237 2.07831ZM44.7206 41.1388L42.6698 66.4453C42.5057 68.3594 44.0233 70 45.9374 70H53.5936C55.412 70 56.8748 68.5371 56.8748 66.7188V3.28144C56.8748 1.47675 55.412 0.000195405 53.5936 0.000195405C42.3143 0.000195405 23.3242 24.4044 44.7206 41.1388Z" fill="#DA1641"/>
                    </svg>
                </div>
                <div className="text-center">
                    <h3 className="font-Cardo uppercase text-xl py-4">Nutricionistas</h3>
                </div>
                <div className="p-2">
                    <p className="font-Roboto text-base text-center">En nuestra plataforma contamos con nutricionistas especializados que te brindarán asesoramiento personalizado. Entendemos que la alimentación es clave para alcanzar un estilo de vida saludable, Los mismos están aquí para diseñar planes alimenticios adaptados a tus necesidades y objetivos.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contamos