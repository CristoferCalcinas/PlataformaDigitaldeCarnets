import Image from "next/image";

export default function LoginPage() {
    return (
        <>
            <div className="flex min-h-full flex-1">
                <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div>

                            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Iniciar sesión en tu cuenta
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                No tienes una cuenta?{' '}
                                <a href="#" className="font-semibold text-cyan-600 hover:text-cyan-500">
                                    Ver los horarios de atención
                                </a>
                            </p>
                        </div>

                        <div className="mt-10">
                            <div>
                                <form action="#" method="POST" className="space-y-6">
                                    {/* div con el input de numero de carnet de identidad*/}
                                    <div>
                                        <label htmlFor="ci_number" className="block text-sm font-medium leading-6 text-gray-900">
                                            Numero del Carnet de Identidad
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="ci_number"
                                                name="ci_number"
                                                type="text"
                                                autoComplete="off"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    {/* div con el input de contraseña*/}
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                            Contraceña
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                id="show-password"
                                                name="show-password"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-600"
                                            />
                                            <label htmlFor="show-password" className="ml-3 block text-sm leading-6 text-gray-700">
                                                Mostrar contraseña
                                            </label>
                                        </div>

                                        <div className="text-sm leading-6">
                                            <a href="#" className="font-semibold text-cyan-600 hover:text-cyan-500">
                                                Olvidaste tu contraseña?
                                            </a>
                                        </div>
                                    </div>

                                    {/* div con el boton de iniciar sesion*/}
                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                                        >
                                            Iniciar sesión
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative hidden w-0 flex-1 lg:block">
                    <Image
                        priority
                        width={400}
                        height={400}
                        className="absolute inset-0 h-full w-full object-cover"
                        alt=""
                        src="/image_login.png"
                    />
                </div>
            </div>
        </>
    );
}