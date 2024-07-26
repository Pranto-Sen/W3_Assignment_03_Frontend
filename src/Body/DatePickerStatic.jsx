import React from 'react';

function DatePickerStatic() {
    return (
        <div className="date-picker" style={{ marginBottom: '25px' }}>
            <h2>Select check-in date</h2>
            <p>Add your travel dates for exact pricing</p>
            <div className="calendar-header">
                <div className="month-selector">
                    <span className="arrow">&#8249;</span>
                    <span className="month" style={{ whiteSpace: 'nowrap' }}>July 2024</span>
                    <span className="month" style={{ whiteSpace: 'nowrap' }} id="calender-2">August 2024</span>
                    <span className="arrow">&#8250;</span>
                </div>
            </div>
            <div className="calendars">
                <div className="calendar-static" id="calender-1">
                    <table>
                        <thead>
                            <tr>
                                <th>Su</th>
                                <th>Mo</th>
                                <th>Tu</th>
                                <th>We</th>
                                <th>Th</th>
                                <th>Fr</th>
                                <th>Sa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="faded">30</td>
                                <td className="faded">1</td>
                                <td className="faded">2</td>
                                <td className="faded">3</td>
                                <td className="faded">4</td>
                                <td className="faded">5</td>
                                <td className="faded">6</td>
                            </tr>
                            <tr>
                                <td className="faded">7</td>
                                <td>8</td>
                                <td>9</td>
                                <td>10</td>
                                <td>11</td>
                                <td>12</td>
                                <td>13</td>
                            </tr>
                            <tr>
                                <td className="faded">14</td>
                                <td className="faded">15</td>
                                <td className="faded">16</td>
                                <td className="faded">17</td>
                                <td className="faded">18</td>
                                <td className="faded">19</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <td>21</td>
                                <td>22</td>
                                <td>23</td>
                                <td>24</td>
                                <td>25</td>
                                <td>26</td>
                                <td>27</td>
                            </tr>
                            <tr>
                                <td>28</td>
                                <td>29</td>
                                <td>30</td>
                                <td>31</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="calendar">
                    <table id="calender-2">
                        <thead>
                            <tr>
                                <th>Su</th>
                                <th>Mo</th>
                                <th>Tu</th>
                                <th>We</th>
                                <th>Th</th>
                                <th>Fr</th>
                                <th>Sa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>12</td>
                                <td>13</td>
                                <td>14</td>
                                <td>15</td>
                                <td>16</td>
                                <td>17</td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>19</td>
                                <td>20</td>
                                <td>21</td>
                                <td>22</td>
                                <td>23</td>
                                <td>24</td>
                            </tr>
                            <tr>
                                <td>25</td>
                                <td>26</td>
                                <td>27</td>
                                <td>28</td>
                                <td>29</td>
                                <td>30</td>
                                <td>31</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="footer">
                <span className="keyboard-icon">⌨</span>
                <span className="clear-dates">Clear dates</span>
            </div>
        </div>
    );
}

export default DatePickerStatic;
