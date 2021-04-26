import React from 'react'
import './Filter.css'

export const Filter = () => {
    return (
        <div className="filter">
                    <div className="filter-type">
                        <form action="">
                            <p>
                                <b className="first-name">DEVICE TYPE</b>
                            </p>
                            <p>
                                <label className="checkbox-other">
                                    <input type="checkbox"  defaultChecked/>
                                    <span> Laptop</span>
                                </label>
                                <label className="checkbox-other">
                                    <input type="checkbox" />
                                    <span> Tablet</span>
                                </label>
                            </p>
                        </form>
                    </div>
                    <div className="filter-color">
                        <form action="">
                            <p>
                                <b className="first-name">COLOR</b>
                            </p>
                            <p>
                                <label className="checkbox-other">
                                    <input type="checkbox" />
                                    <span> Black</span>
                                </label>
                                <label className="checkbox-other">
                                    <input type="checkbox" />
                                    <span> Red</span>
                                </label>
                                <label className="checkbox-other">
                                    <input type="checkbox" defaultChecked/>
                                    <span> Green</span>
                                </label>
                                <label className="checkbox-other">
                                    <input type="checkbox" />
                                    <span> Blue</span>
                                </label>
                                <label className="checkbox-other">
                                    <input type="checkbox" />
                                    <span> Orange</span>
                                </label>
                                
                            </p>
                        </form>
                    </div>
                    <div className="filter-ram">
                        <form action="">
                            <p>
                                <b className="first-name">RAM</b>
                            </p>
                            <p>
                                <label className="checkbox-other">
                                    <input type="checkbox" />
                                    <span> 1GB</span>
                                </label>
                                <label className="checkbox-other">
                                    <input type="checkbox" />
                                    <span> 2GB</span>
                                </label>
                                <label className="checkbox-other">
                                    <input type="checkbox" defaultChecked/>
                                    <span> 4GB</span>
                                </label>
                                <label className="checkbox-other">
                                    <input type="checkbox" />
                                    <span> 6GB</span>
                                </label>
                                <label className="checkbox-other">
                                    <input type="checkbox" />
                                    <span> 8GB</span>
                                </label>
                            </p>
                        </form>
                    </div>
                    <div className="filter-opt">
                        <p>Show more options ...</p>
                    </div>
                    <div className="filter-button">
                        <form action="">
                            <input type="button" value="SUBMIT"/>
                        </form>
                    </div>
                </div>
    )
}