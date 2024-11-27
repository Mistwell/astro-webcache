import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ReactSubmenu() {
	const [isOpen, setOpen] = useState(false);
	const animation = useRef<any>(null);

	useEffect(() => {
		if (isOpen) {
			animation.current = gsap.from("[data-menu]", {
				paused: true,
				y: "-100%",
				duration: 0.6,
			});
			animation.current.play();
		}
	}, [isOpen]);

	function setOpenMenu(state: boolean) {
		if (state) {
			setOpen(true);
		} else {
			animation.current.reverse();
			setTimeout(() => {
				setOpen(false);
			}, 600);
		}
	}

	return (
		<>
			<button
				onClick={() => {
					setOpenMenu(!isOpen);
				}}
				className="cursor-pointer"
			>
				React Component
			</button>
			{isOpen && (
				<div
					data-menu
					className=" absolute left-0 right-0 top-0 w-full h-[300px] bg-green-400 z-[-1] flex items-center justify-center"
				>
					<div className="text-2xl ">Dynamic React Component</div>
				</div>
			)}
		</>
	);
}
