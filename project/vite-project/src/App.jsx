import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

	const [showTemasRelevantes, setShowTemasRelevantes] = useState(false);
	const [showRepresentantes, setShowRepresentantes] = useState(false);
	const toggleTemasRelevantes = () => {
		setShowTemasRelevantes(!showTemasRelevantes);
		setShowRepresentantes(false);
	};
	const toggleRepresentantes = () => {
		setShowRepresentantes(!showRepresentantes);
		setShowTemasRelevantes(false);
	};

	return (


		<>

			<div class="side-nav" >
				<div class="brand-nav-list" >
					<div class="frame-2" >
						<div class="logo" >
							<div class="nombre" >
								Votaciones </div>
						</div>
					</div>
					<div class="nav-list" >
						<div class="nav-item" >
							<div class="leading-icon-nav-link" >
								<div class="leading-icon" >
									<div class="home" >
										<div class="iconly-bold-home" >
											<svg class="home2" width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M8.73072 23.8331V20.1038C8.73072 19.1518 9.50811 18.38 10.4671 18.38H13.9726C14.4331 18.38 14.8747 18.5616 15.2004 18.8849C15.526 19.2082 15.7089 19.6466 15.7089 20.1038V23.8331C15.706 24.2289 15.8624 24.6095 16.1433 24.8904C16.4241 25.1712 16.8064 25.3292 17.205 25.3292H19.5966C20.7136 25.3321 21.7858 24.8936 22.5767 24.1106C23.3675 23.3275 23.812 22.2642 23.812 21.1554V10.531C23.812 9.63532 23.412 8.78569 22.7199 8.21103L14.5841 1.76054C13.1689 0.629552 11.1412 0.666068 9.76817 1.84727L1.81803 8.21103C1.09322 8.76875 0.660018 9.6209 0.638611 10.531V21.1445C0.638611 23.4557 2.52587 25.3292 4.85393 25.3292H7.19092C8.01899 25.3292 8.69196 24.666 8.69796 23.844L8.73072 23.8331Z" fill="black" />
											</svg>
										</div>
									</div>
								</div>
								<div class="nav-link" >
									<div class="inicio" >
										<button className="nav-button"> Inicio</button> </div>
								</div>
							</div>
						</div>
						<div class="nav-item2" >
							<div class="leading-icon-nav-link" >
								<div class="leading-icon" >
									<div class="edit-square" >
										<div class="iconly-bold-edit-square" >
											<svg class="edit-square2" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M17.9153 0.492037C19.6698 0.382381 21.4 0.991576 22.7036 2.1856C23.8977 3.48927 24.5069 5.21939 24.4094 6.98605V18.3658C24.5191 20.1325 23.8977 21.8626 22.7158 23.1663C21.4121 24.3603 19.6698 24.9695 17.9153 24.8598H6.53548C4.7688 24.9695 3.03868 24.3603 1.73499 23.1663C0.540958 21.8626 -0.0682418 20.1325 0.0414141 18.3658V6.98605C-0.0682418 5.21939 0.540958 3.48927 1.73499 2.1856C3.03868 0.991576 4.7688 0.382381 6.53548 0.492037H17.9153ZM17.5985 6.06008C16.8431 5.30468 15.6247 5.30468 14.8693 6.06008L14.053 6.88858C13.9312 7.01042 13.9312 7.21755 14.053 7.33939C14.053 7.33939 14.0769 7.36315 14.1195 7.40547L14.4192 7.70352C14.5925 7.876 14.8089 8.0914 15.0262 8.308L15.763 9.04443C15.9167 9.19886 16.0187 9.30235 16.0268 9.31318C16.1608 9.45938 16.2461 9.65433 16.2461 9.87364C16.2461 10.3123 15.8928 10.6778 15.442 10.6778C15.2349 10.6778 15.0399 10.5925 14.9059 10.4585L12.8712 8.43594C12.7737 8.33847 12.6031 8.33847 12.5056 8.43594L6.69387 14.2477C6.2918 14.6497 6.06031 15.1858 6.04812 15.7585L5.97502 18.646C5.97502 18.8044 6.02375 18.9506 6.13341 19.0603C6.24307 19.1699 6.38927 19.2309 6.54767 19.2309H9.4109C9.99574 19.2309 10.5562 18.9994 10.9826 18.5851L19.1825 10.361C19.9257 9.60559 19.9257 8.3872 19.1825 7.64398L17.5985 6.06008Z" fill="#010000" />
											</svg>
										</div>
									</div>
								</div>
								<div class="nav-link" >
									<div class="representantes" >
										<button className="nav-button" onClick={toggleRepresentantes}>Representantes</button> </div>
								</div>
							</div>
						</div>
						<div class="nav-item" >
							<div class="leading-icon-nav-link" >
								<div class="leading-icon" >
									<div class="document" >
										<div class="iconly-bold-document" >
											<svg class="document2" width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M16.3368 0.0226135C20.1043 0.0226135 22.2021 2.19359 22.2021 5.91352V18.5125C22.2021 22.2934 20.1043 24.4156 16.3368 24.4156H6.11493C2.40719 24.4156 0.248413 22.2934 0.248413 18.5125V5.91352C0.248413 2.19359 2.40719 0.0226135 6.11493 0.0226135H16.3368ZM6.44423 16.7806C6.07834 16.744 5.72464 16.9148 5.5295 17.2319C5.33435 17.5368 5.33435 17.9393 5.5295 18.2564C5.72464 18.5613 6.07834 18.7442 6.44423 18.6955H16.0063C16.4929 18.6467 16.86 18.2308 16.86 17.7441C16.86 17.2441 16.4929 16.8294 16.0063 16.7806H6.44423ZM16.0063 11.2178H6.44423C5.91857 11.2178 5.49291 11.6459 5.49291 12.1703C5.49291 12.6948 5.91857 13.1217 6.44423 13.1217H16.0063C16.5307 13.1217 16.9576 12.6948 16.9576 12.1703C16.9576 11.6459 16.5307 11.2178 16.0063 11.2178ZM10.0898 5.69399H6.44423V5.70618C5.91857 5.70618 5.49291 6.13306 5.49291 6.65751C5.49291 7.18196 5.91857 7.60884 6.44423 7.60884H10.0898C10.6154 7.60884 11.0423 7.18196 11.0423 6.64409C11.0423 6.12086 10.6154 5.69399 10.0898 5.69399Z" fill="black" />
											</svg>
										</div>
									</div>
								</div>
								<div class="nav-link" >
									<div class="dashboard" >
										<button className="nav-button" onClick={toggleTemasRelevantes}>Temas relevantes</button> </div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{showTemasRelevantes && (
					<div class="temas-relevantes" >
						<div class="temas-relevantess" >
							Temas relevantes </div>
						<div class="frame-2121" >
							<div class="button" >
								<div class="sapaperra" >
									Los baños<br />
									<br />
									<br />
									<br />#Tema relevante en cuestion 1<br />
									<br />
									<br />..... </div>
							</div>
							<div class="button2" >
								<div class="sapaperra" >
									La universidad<br />
									<br />
									<br />
									<br />#Tema relevante en cuestion 2<br />
									<br />
									<br />..... </div>
							</div>
							<div class="button3" >
								<div class="sapaperra" >
									Los profesores<br />
									<br />
									<br />
									<br />#Tema relevante en cuestion 3<br />
									<br />
									<br />..... </div>
							</div>
						</div>
					</div>



				)}
				{showRepresentantes && (

					<div class="muestra-representantes" >
						<div class="representantess" >
							Representantes<br />
						</div>
						<div class="frame-2121" >
							<div class="button" >
								<div class="sapaperra" >
									Sapaperra </div>
								<img class="imagen-1" src="https://es-static.z-dn.net/files/d8e/685846fbd3d43eacfa02e87972bb63bd.jpg" />
							</div>
							<div class="button2" >
								<div class="cristiano-ronaldo" >
									Cristiano Ronaldo </div>
								<img class="imagen-2" src="https://l-frii.com/wp-content/uploads/2022/12/Cristiano-Ronaldo-annonce-a-Al-Nassr-voici-le-contrat-vertigineux-quil-va-bientot-signer.jpg" />
							</div>
							<div class="button" >
								<div class="lionel-messi" >
									Lionel Messi </div>
								<img class="imagen-3" src="imagen-3.png" />
							</div>
						</div>
						<div class="frame-2122" >
							<div class="button" >
								<div class="david-macalister-silva" >
									David Macalister Silva </div>
								<img class="imagen-1" src="imagen-1.png" />
							</div>
							<div class="button2" >
								<div class="alvaro-uribe" >
									Alvaro Uribe </div>
								<img class="imagen-2" src="imagen-2.png" />
							</div>
							<div class="button2" >
								<div class="gustavo-petro" >
									Gustavo Petro </div>
								<img class="imagen-3" src="imagen-3.png" />
							</div>
						</div>
					</div>


				)
				}
				<div class="logout-toogle" >
					<div class="nav-item3" >
						<div class="leading-icon-nav-link" >
							<div class="leading-icon" >
								<div class="logout" >
									<div class="iconly-bold-logout" >
										<svg class="logout2" width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M11.6066 0.578186C14.6344 0.578186 17.1038 3.00529 17.1038 5.99343V11.8356H9.65831C9.12471 11.8356 8.7028 12.2502 8.7028 12.7747C8.7028 13.2869 9.12471 13.7138 9.65831 13.7138H17.1038V19.5437C17.1038 22.5319 14.6344 24.9712 11.5817 24.9712H5.53844C2.49818 24.9712 0.0287476 22.5441 0.0287476 19.5559V6.00563C0.0287476 3.00529 2.51059 0.578186 5.55085 0.578186H11.6066ZM20.202 8.56714C20.5679 8.18905 21.1655 8.18905 21.5314 8.55494L25.0928 12.1041C25.2757 12.2871 25.3733 12.5188 25.3733 12.7749C25.3733 13.0189 25.2757 13.2628 25.0928 13.4335L21.5314 16.9827C21.3485 17.1657 21.1045 17.2632 20.8728 17.2632C20.6289 17.2632 20.3849 17.1657 20.202 16.9827C19.8361 16.6168 19.8361 16.0192 20.202 15.6533L22.1534 13.7141H17.1041V11.8358H22.1534L20.202 9.89656C19.8361 9.53066 19.8361 8.93303 20.202 8.56714Z" fill="#FAFAFA" />
										</svg>
									</div>
								</div>
							</div>
							<div class="nav-link" >
								<div class="salir" >
									¿Salir de la cuenta? </div>
							</div>
						</div>
					</div>
				</div>
			</div >


		</>
	);
}

export default App
