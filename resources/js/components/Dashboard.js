import React from 'react';
import ReactDOM from 'react-dom';

function Dashboard() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">                   
                        <div className="">ShopFree</div>                        
                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="title">Sign in.</div>
                        <div>
                        <form>
                            <label>                                
                                <input type="text" placeholder="E-mail" name="email" />
                            </label>
                            <input class="submit" type="submit" value="Enviar" />
                        </form>
                        {/* <form>
                        <label>                                
                                <input type="text" placeholder="* * * " name="pass" />
                            </label> 
                        </form> */}

                        </div>
                        {/* <div className="card-body">Aqui estamos usando Laravel8 + React</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

if (document.getElementById('dashboard')) {
    ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}
