import {
  useState,
  useEffect,
} from "react";

import {

  FaTasks,
  FaCheckCircle,
  FaTrash,

} from "react-icons/fa";

import {
  database,
} from "../firebase";

import {

  ref,
  push,
  onValue,
  remove,
  update,

} from "firebase/database";

const FarmTasks = () => {

  const [task, setTask] =
    useState("");

  const [tasks, setTasks] =
    useState([]);

  // LOAD TASKS

  useEffect(() => {

    const tasksRef =
      ref(database, "tasks");

    onValue(

      tasksRef,

      (snapshot) => {

        const data =
          snapshot.val();

        if (data) {

          const loadedTasks =

            Object.entries(data).map(

              ([id, value]) => ({

                id,

                ...value,
              })
            );

          setTasks(
            loadedTasks
          );

        } else {

          setTasks([]);
        }
    });

  }, []);

  // ADD TASK

  const addTask = () => {

    if (!task) return;

    const tasksRef =
      ref(database, "tasks");

    push(tasksRef, {

      text: task,

      completed: false,
    });

    setTask("");
  };

  // TOGGLE

  const toggleTask = (

    id,
    completed

  ) => {

    const taskRef =
      ref(

        database,

        `tasks/${id}`
      );

    update(taskRef, {

      completed:
        !completed,
    });
  };

  // DELETE

  const deleteTask = (id) => {

    const taskRef =
      ref(

        database,

        `tasks/${id}`
      );

    remove(taskRef);
  };

  return (

    <div className="bg-[#112233]/70 backdrop-blur-xl border border-[#1d3d4f] rounded-[35px] p-10 shadow-2xl mt-10">

      {/* HEADER */}

      <div className="flex items-center gap-5">

        <div className="w-20 h-20 rounded-full bg-[#0b1622] flex items-center justify-center">

          <FaTasks className="text-[#00ff99] text-4xl" />

        </div>

        <div>

          <h2 className="text-4xl font-bold">

            Farm Task Manager

          </h2>

          <p className="text-gray-400 mt-3 text-lg">

            Manage daily farming activities

          </p>

        </div>

      </div>

      {/* INPUT */}

      <div className="mt-10 flex flex-col lg:flex-row gap-5">

        <input

          type="text"

          placeholder="Add farming task..."

          value={task}

          onChange={(e) =>
            setTask(
              e.target.value
            )
          }

          className="flex-1 bg-white border border-[#1d3d4f] p-6 rounded-3xl text-black placeholder:text-slate-500 outline-none text-lg"

        />

        <button

          onClick={addTask}

          className="bg-[#00ff99] hover:bg-[#00cc77] transition text-black font-bold px-10 rounded-3xl text-lg shadow-xl"

        >

          Add Task

        </button>

      </div>

      {/* TASKS */}

      <div className="mt-10 space-y-5">

        {tasks.map((item) => (

          <div

            key={item.id}

            className="bg-[#0b1622] border border-[#1d3d4f] p-6 rounded-3xl flex justify-between items-center"

          >

            {/* LEFT */}

            <div className="flex items-center gap-5">

              <button

                onClick={() =>

                  toggleTask(
                    item.id,
                    item.completed
                  )
                }

                className={`text-3xl ${
                  item.completed
                    ? "text-[#00ff99]"
                    : "text-gray-500"
                }`}

              >

                <FaCheckCircle />

              </button>

              <p

                className={`text-xl ${
                  item.completed
                    ? "line-through text-gray-500"
                    : "text-white"
                }`}

              >

                {item.text}

              </p>

            </div>

            {/* DELETE */}

            <button

              onClick={() =>
                deleteTask(
                  item.id
                )
              }

              className="w-14 h-14 rounded-2xl bg-red-500 hover:bg-red-600 flex items-center justify-center transition text-xl"

            >

              <FaTrash />

            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default FarmTasks;