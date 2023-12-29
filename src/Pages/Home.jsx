import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { FaCartPlus, FaTrashAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import {
  Form,
  Container,
  AddButton,
  ClearButton,
  CustomCheckbox,
  Task,
  TrashButton,
  QuantityBlock,
  PriceBlock,
  QuantityInput,
  QuantityButton,
  PriceInput,
  Total,
} from "./styles";

export const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newtaskName, setNewTaskName] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("todoListTasks");

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = (e) => {
    e.preventDefault();

    const taskName = newtaskName.trim();

    if (!taskName) return;

    const newTask = {
      id: v4(),
      name: taskName,
      completed: false,
      quantity: 1,
      price: 0,
    };

    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks);
    setNewTaskName("");

    localStorage.setItem("todoListTasks", JSON.stringify(updatedTasks));
  };

  const removeTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);

    localStorage.setItem("todoListTasks", JSON.stringify(filteredTasks));
  };

  const toggleCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );

    setTasks(updatedTasks);
    localStorage.setItem("todoListTasks", JSON.stringify(updatedTasks));
  };

  const updateQuantity = (taskId, newQuantity) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, quantity: newQuantity } : task
    );

    setTasks(updatedTasks);
    localStorage.setItem("todoListTasks", JSON.stringify(updatedTasks));
  };

  const updatePrice = (taskId, newPrice) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, price: newPrice } : task
    );

    setTasks(updatedTasks);
    localStorage.setItem("todoListTasks", JSON.stringify(updatedTasks));
  };

  const clearAllTasks = (e) => {
    e.preventDefault();
    setTasks([]);
    localStorage.removeItem("todoListTasks");
  };

  return (
    <Container>
      <h1>
        {" "}
        <FaCartPlus /> ListApp{" "}
      </h1>

      <Form>
        <input
          type="text"
          placeholder="Digite o nome do item..."
          value={newtaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />

        <AddButton onClick={(e) => addTask(e)}>Adicionar item</AddButton>

        <ClearButton
          style={{ background: "#650d0d", color: "white" }}
          onClick={ (e) => clearAllTasks(e)}
        >
          Limpar items
        </ClearButton>
      </Form>

      <ul>
        <AnimatePresence>
          {tasks.map((task) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <Task completed={task.completed} key={task.id}>
                <CustomCheckbox
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleCompletion(task.id)}
                />

                <p>{task.name}</p>

                <QuantityBlock>
                  <QuantityButton
                    style={{ background: "#650d0d", color: "white" }}
                    onClick={() =>
                      updateQuantity(task.id, Math.max(task.quantity - 1, 1))
                    }
                  >
                    -
                  </QuantityButton>

                  <QuantityInput
                    type="text"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    value={task.quantity}
                    onChange={(e) => updateQuantity(task.id, e.target.value)}
                    onBlur={() =>
                      updateQuantity(task.id, Math.max(task.quantity, 1))
                    }
                  />
                  <QuantityButton
                    onClick={() => updateQuantity(task.id, task.quantity + 1)}
                  >
                    +
                  </QuantityButton>
                </QuantityBlock>

                <PriceBlock>
                  <span>R$</span>
                  <PriceInput
                    type="text"
                    value={task.price === 0 ? "" : task.price} // Ajustado aqui
                    onChange={(e) => updatePrice(task.id, e.target.value)}
                    onFocus={(e) => {
                      if (e.target.value === "0") {
                        e.target.value = "";
                      }
                    }}
                  />
                </PriceBlock>

                <TrashButton onClick={() => removeTask(task.id)}>
                  <FaTrashAlt />
                </TrashButton>
              </Task>
            </motion.div>
          ))}
        </AnimatePresence>
      </ul>

      <Total>
        <p>
          Total: R$ {""}
          {tasks
            .reduce((total, task) => total + task.quantity * task.price, 0)
            .toFixed(2)}
        </p>
      </Total>
    </Container>
  );
};
