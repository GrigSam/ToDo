import React, {Component} from 'react';
import './App.css';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: '',
            list: [],
            compiledItems: [],


        };

    }

    updateInput(key, value) {
        this.setState({
            [key]: value
        })
    }


    addItem() {
        const newItem = {
            id: Math.random(),
            value: this.state.newItem,
        };
        const list = [...this.state.list];
        list.push(newItem);
        this.setState({
            list,
            newItem: '',

        })
    }

    compileItem(item, id) {
        const list = [...this.state.list];
        const updateList = list.filter(item => item.id !== id);
        this.setState((prevState) => ({
            list: updateList,
            compiledItems: [...prevState.compiledItems, item]
        }))


    }

    deleteItem(id) {
        const list = [...this.state.list];
        const updateList = list.filter(item => item.id !== id);

        this.setState({
            list: updateList,


        });
    }

    deleteCompileItem(id) {


        const compiledItems = [...this.state.compiledItems];
        const updateCompileList = compiledItems.filter(item => item.id !== id);
        this.setState({
            compiledItems: updateCompileList,


        });
    }

    changeCompileItem(id, check) {
        const list = [...this.state.list];
        list.push(check);

        const compiledItems = [...this.state.compiledItems];
        const updateCompileList = compiledItems.filter(item => item.id !== id);
        this.setState({
            compiledItems: updateCompileList,
            list,

        });
    }


    render() {
        return (
            <div className="container">
                <div className="all">
                    Add an Item...
                    <br/>
                    <input
                        type='text'
                        value={this.state.newItem}
                        onChange={e => this.updateInput("newItem", e.target.value)}
                    />
                    <button onClick={() => this.addItem()} disabled={!this.state.newItem.length}>Add</button>
                    <div><h1> All</h1>{this.state.list.length + this.state.compiledItems.length} </div>
                    <ul className="first">
                        {this.state.list.map((item, index) => {
                            return (
                                <li key={item.id}>
                                    {item.value} {}
                                    <button onClick={() => this.deleteItem(item.id)}>
                                        Clear
                                    </button>
                                    <button onClick={() => this.compileItem(item, item.id)}>Compile</button>
                                </li>)
                        })}
                    </ul>
                </div>


                <div className="compile"><h1>Compile </h1> {this.state.compiledItems.length}
                    <ul className="last">
                        {this.state.compiledItems.map((check) => {
                            return (
                                <li key={check.id}>
                                    {check.value} {}
                                    <button onClick={() => this.deleteCompileItem(check.id)}>
                                        Clear
                                    </button>
                                    {}
                                    <button onClick={() => this.changeCompileItem(check.id, check)}>Compile</button>

                                </li>
                            )
                        })}
                    </ul>

                </div>
            </div>
        )
    }
}


export default ToDoList;

