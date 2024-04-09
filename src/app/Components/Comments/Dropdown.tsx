// tailwind ui
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";

type DropdownProps = {
  commentId: string;
  setEditMode: (value: boolean) => void;
  setOpenModal: (value: boolean) => void;
};

const Dropdown = ({ commentId, setEditMode, setOpenModal }: DropdownProps) => {
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <EllipsisHorizontalIcon
          className="mr-2 relative top-[10px] h-8 w-8 text-gray-400"
          aria-hidden="false"
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="bg-neutral-950 shadow-xl absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => setEditMode(true)}
                  className={classNames(
                    active ? "bg-gray-800 text-gray-200" : "text-gray-300",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Editar
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={() => setOpenModal(true)}
                  className={classNames(
                    active ? "bg-gray-800 text-gray-200" : "text-gray-300",
                    "block px-4 py-2 text-sm cursor-pointer"
                  )}
                >
                  Excluir
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
