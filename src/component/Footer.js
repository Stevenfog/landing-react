import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <span className="brand">WackShop</span>
                        <p className="brand-tagline font weight-light">
                            Get your order
                        </p>
                    </div>
                    <div className="col-3 mr-5">
                        <h6 className="mt-2">
                            Explore Us
                        </h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                Our careers
                            </li>
                            <li className="list-group-item">
                                Privacy
                            </li>
                            <li className="list-group-item">
                                Terms & Conditions
                            </li>
                        </ul>
                    </div>
                    <div className="col-3 mr-5">
                        <h6 className="mt-2">
                            Connnect us
                        </h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                JimCarry@gmail.com
                            </li>
                            <li className="list-group-item">
                                021 - xxx - xxx
                            </li>
                            <li className="list-group-item">
                                <span>
                                 Jakarta
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center copyrights">
                        Copyright 2023 • All rights reserved •
                    </div>
                </div>
            </div>
        </footer>
    )
}