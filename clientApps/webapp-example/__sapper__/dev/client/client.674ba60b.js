import { a as noop, b as safe_not_equal, c as SvelteComponentDev, d as init, e as element, f as text, g as space, h as claim_element, i as children, j as claim_text, k as detach$1, l as add_location, m as insert, n as append, o as create_slot, p as mount_component, q as get_slot_changes, r as get_slot_context, s as set_data, t as empty, u as assign, v as get_spread_update, w as setContext, x as on_outro, y as check_outros, z as group_outros } from './chunk.06b6fc4b.js';

function writable(value, start = noop) {
	let stop;
	const subscribers = [];

	function set(new_value) {
		if (safe_not_equal(value, new_value)) {
			value = new_value;
			if (!stop) return; // not ready
			subscribers.forEach(s => s[1]());
			subscribers.forEach(s => s[0](value));
		}
	}

	function update(fn) {
		set(fn(value));
	}

	function subscribe(run, invalidate = noop) {
		const subscriber = [run, invalidate];
		subscribers.push(subscriber);
		if (subscribers.length === 1) stop = start(set) || noop;
		run(value);

		return () => {
			const index = subscribers.indexOf(subscriber);
			if (index !== -1) subscribers.splice(index, 1);
			if (subscribers.length === 0) stop();
		};
	}

	return { set, update, subscribe };
}

const stores = {
	preloading: writable(false),
	page: writable(null)
};

const CONTEXT_KEY = {};

const preload = () => ({});

/* src/components/Nav.html generated by Svelte v3.0.0 */

const file = "src/components/Nav.html";

function create_fragment(ctx) {
	var nav, ul, li0, a0, t0, a0_class_value, t1, li1, a1, t2, a1_class_value, t3, li2, a2, t4, a2_class_value;

	return {
		c: function create() {
			nav = element("nav");
			ul = element("ul");
			li0 = element("li");
			a0 = element("a");
			t0 = text("home");
			t1 = space();
			li1 = element("li");
			a1 = element("a");
			t2 = text("about");
			t3 = space();
			li2 = element("li");
			a2 = element("a");
			t4 = text("blog");
			this.h();
		},

		l: function claim(nodes) {
			nav = claim_element(nodes, "NAV", { class: true }, false);
			var nav_nodes = children(nav);

			ul = claim_element(nav_nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			li0 = claim_element(ul_nodes, "LI", { class: true }, false);
			var li0_nodes = children(li0);

			a0 = claim_element(li0_nodes, "A", { class: true, href: true }, false);
			var a0_nodes = children(a0);

			t0 = claim_text(a0_nodes, "home");
			a0_nodes.forEach(detach$1);
			li0_nodes.forEach(detach$1);
			t1 = claim_text(ul_nodes, "\n\t\t");

			li1 = claim_element(ul_nodes, "LI", { class: true }, false);
			var li1_nodes = children(li1);

			a1 = claim_element(li1_nodes, "A", { class: true, href: true }, false);
			var a1_nodes = children(a1);

			t2 = claim_text(a1_nodes, "about");
			a1_nodes.forEach(detach$1);
			li1_nodes.forEach(detach$1);
			t3 = claim_text(ul_nodes, "\n\n\t\t\n\t\t");

			li2 = claim_element(ul_nodes, "LI", { class: true }, false);
			var li2_nodes = children(li2);

			a2 = claim_element(li2_nodes, "A", { rel: true, class: true, href: true }, false);
			var a2_nodes = children(a2);

			t4 = claim_text(a2_nodes, "blog");
			a2_nodes.forEach(detach$1);
			li2_nodes.forEach(detach$1);
			ul_nodes.forEach(detach$1);
			nav_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			a0.className = a0_class_value = "" + (ctx.segment === undefined ? "selected" : "") + " svelte-1hq25gf";
			a0.href = ".";
			add_location(a0, file, 5, 6, 51);
			li0.className = "svelte-1hq25gf";
			add_location(li0, file, 5, 2, 47);
			a1.className = a1_class_value = "" + (ctx.segment === "about" ? "selected" : "") + " svelte-1hq25gf";
			a1.href = "about";
			add_location(a1, file, 6, 6, 133);
			li1.className = "svelte-1hq25gf";
			add_location(li1, file, 6, 2, 129);
			a2.rel = "prefetch";
			a2.className = a2_class_value = "" + (ctx.segment === "blog" ? "selected" : "") + " svelte-1hq25gf";
			a2.href = "blog";
			add_location(a2, file, 10, 6, 376);
			li2.className = "svelte-1hq25gf";
			add_location(li2, file, 10, 2, 372);
			ul.className = "svelte-1hq25gf";
			add_location(ul, file, 4, 1, 40);
			nav.className = "svelte-1hq25gf";
			add_location(nav, file, 3, 0, 33);
		},

		m: function mount(target, anchor) {
			insert(target, nav, anchor);
			append(nav, ul);
			append(ul, li0);
			append(li0, a0);
			append(a0, t0);
			append(ul, t1);
			append(ul, li1);
			append(li1, a1);
			append(a1, t2);
			append(ul, t3);
			append(ul, li2);
			append(li2, a2);
			append(a2, t4);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(nav);
			}
		}
	};
}

function instance($$self) {
	let segment;

	return { segment };
}

class Nav extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

/* src/routes/_layout.svelte generated by Svelte v3.0.0 */

const file$1 = "src/routes/_layout.svelte";

function create_fragment$1(ctx) {
	var t, main, current;

	var nav = new Nav({
		props: { segment: ctx.segment },
		$$inline: true
	});

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = create_slot(default_slot_1, ctx, null);

	return {
		c: function create() {
			nav.$$.fragment.c();
			t = space();
			main = element("main");

			if (default_slot) default_slot.c();
			this.h();
		},

		l: function claim(nodes) {
			nav.$$.fragment.l(nodes);
			t = claim_text(nodes, "\n\n");

			main = claim_element(nodes, "MAIN", { class: true }, false);
			var main_nodes = children(main);

			if (default_slot) default_slot.l(main_nodes);
			main_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			main.className = "svelte-1uhnsl8";
			add_location(main, file$1, 19, 0, 260);
		},

		m: function mount(target, anchor) {
			mount_component(nav, target, anchor);
			insert(target, t, anchor);
			insert(target, main, anchor);

			if (default_slot) {
				default_slot.m(main, null);
			}

			current = true;
		},

		p: function update(changed, ctx) {
			var nav_changes = {};
			if (changed.segment) nav_changes.segment = ctx.segment;
			nav.$set(nav_changes);

			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(get_slot_changes(default_slot_1, ctx, changed,), get_slot_context(default_slot_1, ctx, null));
			}
		},

		i: function intro(local) {
			if (current) return;
			nav.$$.fragment.i(local);

			if (default_slot && default_slot.i) default_slot.i(local);
			current = true;
		},

		o: function outro(local) {
			nav.$$.fragment.o(local);
			if (default_slot && default_slot.o) default_slot.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			nav.$destroy(detaching);

			if (detaching) {
				detach$1(t);
				detach$1(main);
			}

			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let { segment } = $$props;

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ('segment' in $$props) $$invalidate('segment', segment = $$props.segment);
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	return { segment, $$slots, $$scope };
}

class Layout extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, ["segment"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.segment === undefined && !('segment' in props)) {
			console.warn("<Layout> was created without expected prop 'segment'");
		}
	}

	get segment() {
		throw new Error("<Layout>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segment(value) {
		throw new Error("<Layout>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/_error.svelte generated by Svelte v3.0.0 */

const file$2 = "src/routes/_error.svelte";

// (38:0) {#if dev && error.stack}
function create_if_block(ctx) {
	var pre, t_value = ctx.error.stack, t;

	return {
		c: function create() {
			pre = element("pre");
			t = text(t_value);
			this.h();
		},

		l: function claim(nodes) {
			pre = claim_element(nodes, "PRE", {}, false);
			var pre_nodes = children(pre);

			t = claim_text(pre_nodes, t_value);
			pre_nodes.forEach(detach$1);
			this.h();
		},

		h: function hydrate() {
			add_location(pre, file$2, 38, 1, 443);
		},

		m: function mount(target, anchor) {
			insert(target, pre, anchor);
			append(pre, t);
		},

		p: function update(changed, ctx) {
			if ((changed.error) && t_value !== (t_value = ctx.error.stack)) {
				set_data(t, t_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(pre);
			}
		}
	};
}

function create_fragment$2(ctx) {
	var title_value, t0, h1, t1, t2, p, t3_value = ctx.error.message, t3, t4, if_block_anchor;

	document.title = title_value = ctx.status;

	var if_block = (ctx.dev && ctx.error.stack) && create_if_block(ctx);

	return {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text(ctx.status);
			t2 = space();
			p = element("p");
			t3 = text(t3_value);
			t4 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "\n\n");

			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, ctx.status);
			h1_nodes.forEach(detach$1);
			t2 = claim_text(nodes, "\n\n");

			p = claim_element(nodes, "P", { class: true }, false);
			var p_nodes = children(p);

			t3 = claim_text(p_nodes, t3_value);
			p_nodes.forEach(detach$1);
			t4 = claim_text(nodes, "\n\n");
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},

		h: function hydrate() {
			h1.className = "svelte-8od9u6";
			add_location(h1, file$2, 33, 0, 374);
			p.className = "svelte-8od9u6";
			add_location(p, file$2, 35, 0, 393);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			append(h1, t1);
			insert(target, t2, anchor);
			insert(target, p, anchor);
			append(p, t3);
			insert(target, t4, anchor);
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},

		p: function update(changed, ctx) {
			if ((changed.status) && title_value !== (title_value = ctx.status)) {
				document.title = title_value;
			}

			if (changed.status) {
				set_data(t1, ctx.status);
			}

			if ((changed.error) && t3_value !== (t3_value = ctx.error.message)) {
				set_data(t3, t3_value);
			}

			if (ctx.dev && ctx.error.stack) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(t0);
				detach$1(h1);
				detach$1(t2);
				detach$1(p);
				detach$1(t4);
			}

			if (if_block) if_block.d(detaching);

			if (detaching) {
				detach$1(if_block_anchor);
			}
		}
	};
}

function instance$2($$self, $$props, $$invalidate) {
	let { status, error } = $$props;

	const dev = "development" === 'development';

	$$self.$set = $$props => {
		if ('status' in $$props) $$invalidate('status', status = $$props.status);
		if ('error' in $$props) $$invalidate('error', error = $$props.error);
	};

	return { status, error, dev };
}

class Error$1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, ["status", "error"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.status === undefined && !('status' in props)) {
			console.warn("<Error> was created without expected prop 'status'");
		}
		if (ctx.error === undefined && !('error' in props)) {
			console.warn("<Error> was created without expected prop 'error'");
		}
	}

	get status() {
		throw new Error$1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set status(value) {
		throw new Error$1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get error() {
		throw new Error$1("<Error>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set error(value) {
		throw new Error$1("<Error>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.0.0 */

// (21:1) {:else}
function create_else_block(ctx) {
	var switch_instance_anchor, current;

	var switch_instance_spread_levels = [
		ctx.level1.props
	];

	var switch_value = ctx.level1.component;

	function switch_props(ctx) {
		let switch_instance_props = {};
		for (var i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
		}
		return {
			props: switch_instance_props,
			$$inline: true
		};
	}

	if (switch_value) {
		var switch_instance = new switch_value(switch_props(ctx));
	}

	return {
		c: function create() {
			if (switch_instance) switch_instance.$$.fragment.c();
			switch_instance_anchor = empty();
		},

		l: function claim(nodes) {
			if (switch_instance) switch_instance.$$.fragment.l(nodes);
			switch_instance_anchor = empty();
		},

		m: function mount(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert(target, switch_instance_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var switch_instance_changes = changed.level1 ? get_spread_update(switch_instance_spread_levels, [
				ctx.level1.props
			]) : {};

			if (switch_value !== (switch_value = ctx.level1.component)) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;
					on_outro(() => {
						old_component.$destroy();
					});
					old_component.$$.fragment.o(1);
					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));

					switch_instance.$$.fragment.c();
					switch_instance.$$.fragment.i(1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			}

			else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},

		i: function intro(local) {
			if (current) return;
			if (switch_instance) switch_instance.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			if (switch_instance) switch_instance.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach$1(switch_instance_anchor);
			}

			if (switch_instance) switch_instance.$destroy(detaching);
		}
	};
}

// (19:1) {#if error}
function create_if_block$1(ctx) {
	var current;

	var error_1 = new Error$1({
		props: { error: ctx.error, status: ctx.status },
		$$inline: true
	});

	return {
		c: function create() {
			error_1.$$.fragment.c();
		},

		l: function claim(nodes) {
			error_1.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(error_1, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var error_1_changes = {};
			if (changed.error) error_1_changes.error = ctx.error;
			if (changed.status) error_1_changes.status = ctx.status;
			error_1.$set(error_1_changes);
		},

		i: function intro(local) {
			if (current) return;
			error_1.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			error_1.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			error_1.$destroy(detaching);
		}
	};
}

// (18:0) <Layout segment={segments[0]} {...level0.props}>
function create_default_slot(ctx) {
	var current_block_type_index, if_block, if_block_anchor, current;

	var if_block_creators = [
		create_if_block$1,
		create_else_block
	];

	var if_blocks = [];

	function select_block_type(ctx) {
		if (ctx.error) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},

		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},

		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);
			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(changed, ctx);
			} else {
				group_outros();
				on_outro(() => {
					if_blocks[previous_block_index].d(1);
					if_blocks[previous_block_index] = null;
				});
				if_block.o(1);
				check_outros();

				if_block = if_blocks[current_block_type_index];
				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}
				if_block.i(1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},

		i: function intro(local) {
			if (current) return;
			if (if_block) if_block.i();
			current = true;
		},

		o: function outro(local) {
			if (if_block) if_block.o();
			current = false;
		},

		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);

			if (detaching) {
				detach$1(if_block_anchor);
			}
		}
	};
}

function create_fragment$3(ctx) {
	var current;

	var layout_spread_levels = [
		{ segment: ctx.segments[0] },
		ctx.level0.props
	];

	let layout_props = {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	};
	for (var i = 0; i < layout_spread_levels.length; i += 1) {
		layout_props = assign(layout_props, layout_spread_levels[i]);
	}
	var layout = new Layout({ props: layout_props, $$inline: true });

	return {
		c: function create() {
			layout.$$.fragment.c();
		},

		l: function claim(nodes) {
			layout.$$.fragment.l(nodes);
		},

		m: function mount(target, anchor) {
			mount_component(layout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var layout_changes = (changed.segments || changed.level0) ? get_spread_update(layout_spread_levels, [
				(changed.segments) && { segment: ctx.segments[0] },
				(changed.level0) && ctx.level0.props
			]) : {};
			if (changed.$$scope || changed.error || changed.status || changed.level1) layout_changes.$$scope = { changed, ctx };
			layout.$set(layout_changes);
		},

		i: function intro(local) {
			if (current) return;
			layout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			layout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			layout.$destroy(detaching);
		}
	};
}

function instance$3($$self, $$props, $$invalidate) {
	

	let { session, error, status, segments, level0, level1 = null } = $$props;

	setContext(CONTEXT_KEY, session);

	$$self.$set = $$props => {
		if ('session' in $$props) $$invalidate('session', session = $$props.session);
		if ('error' in $$props) $$invalidate('error', error = $$props.error);
		if ('status' in $$props) $$invalidate('status', status = $$props.status);
		if ('segments' in $$props) $$invalidate('segments', segments = $$props.segments);
		if ('level0' in $$props) $$invalidate('level0', level0 = $$props.level0);
		if ('level1' in $$props) $$invalidate('level1', level1 = $$props.level1);
	};

	return {
		session,
		error,
		status,
		segments,
		level0,
		level1
	};
}

class App extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, ["session", "error", "status", "segments", "level0", "level1"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.session === undefined && !('session' in props)) {
			console.warn("<App> was created without expected prop 'session'");
		}
		if (ctx.error === undefined && !('error' in props)) {
			console.warn("<App> was created without expected prop 'error'");
		}
		if (ctx.status === undefined && !('status' in props)) {
			console.warn("<App> was created without expected prop 'status'");
		}
		if (ctx.segments === undefined && !('segments' in props)) {
			console.warn("<App> was created without expected prop 'segments'");
		}
		if (ctx.level0 === undefined && !('level0' in props)) {
			console.warn("<App> was created without expected prop 'level0'");
		}
		if (ctx.level1 === undefined && !('level1' in props)) {
			console.warn("<App> was created without expected prop 'level1'");
		}
	}

	get session() {
		throw new Error$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set session(value) {
		throw new Error$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get error() {
		throw new Error$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set error(value) {
		throw new Error$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get status() {
		throw new Error$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set status(value) {
		throw new Error$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get segments() {
		throw new Error$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segments(value) {
		throw new Error$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get level0() {
		throw new Error$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set level0(value) {
		throw new Error$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get level1() {
		throw new Error$1("<App>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set level1(value) {
		throw new Error$1("<App>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

// This file is generated by Sapper — do not edit it!

const ignore = [/^\/blog.json$/, /^\/blog\/([^\/]+?).json$/];

const components = [
	{
		js: () => import('./chunk.26d50335.js'),
		css: ["chunk.26d50335.css"]
	},
	{
		js: () => import('./chunk.5743187d.js'),
		css: []
	},
	{
		js: () => import('./chunk.76529af6.js'),
		css: ["chunk.76529af6.css"]
	},
	{
		js: () => import('./chunk.30737642.js'),
		css: ["chunk.30737642.css"]
	}
];

const routes = (d => [
	{
		// index.svelte
		pattern: /^\/?$/,
		parts: [
			{ i: 0 }
		]
	},

	{
		// about.svelte
		pattern: /^\/about\/?$/,
		parts: [
			{ i: 1 }
		]
	},

	{
		// blog/index.svelte
		pattern: /^\/blog\/?$/,
		parts: [
			{ i: 2 }
		]
	},

	{
		// blog/[slug].svelte
		pattern: /^\/blog\/([^\/]+?)\/?$/,
		parts: [
			null,
			{ i: 3, params: match => ({ slug: d(match[1]) }) }
		]
	}
])(decodeURIComponent);

if (typeof window !== 'undefined') {
	import('./chunk.8e143199.js').then(client => {
		client.connect(10000);
	});
}

function goto(href, opts = { replaceState: false }) {
	const target = select_target(new URL(href, document.baseURI));

	if (target) {
		_history[opts.replaceState ? 'replaceState' : 'pushState']({ id: cid }, '', href);
		return navigate(target, null).then(() => {});
	}

	location.href = href;
	return new Promise(f => {}); // never resolves
}

const initial_data = typeof __SAPPER__ !== 'undefined' && __SAPPER__;

let ready = false;
let root_component;
let current_token;
let root_preloaded;
let current_branch = [];

const session = writable(initial_data && initial_data.session);

let $session;
let session_dirty;

session.subscribe(async value => {
	$session = value;

	if (!ready) return;
	session_dirty = true;

	const target = select_target(new URL(location.href));

	const token = current_token = {};
	const { redirect, props, branch } = await hydrate_target(target);
	if (token !== current_token) return; // a secondary navigation happened while we were loading

	await render(redirect, branch, props, target.page);
});

let prefetching


 = null;
function set_prefetching(href, promise) {
	prefetching = { href, promise };
}

let target;
function set_target(element) {
	target = element;
}

let uid = 1;
function set_uid(n) {
	uid = n;
}

let cid;
function set_cid(n) {
	cid = n;
}

const _history = typeof history !== 'undefined' ? history : {
	pushState: (state, title, href) => {},
	replaceState: (state, title, href) => {},
	scrollRestoration: ''
};

const scroll_history = {};

function select_target(url) {
	if (url.origin !== location.origin) return null;
	if (!url.pathname.startsWith(initial_data.baseUrl)) return null;

	const path = url.pathname.slice(initial_data.baseUrl.length);

	// avoid accidental clashes between server routes and page routes
	if (ignore.some(pattern => pattern.test(path))) return;

	for (let i = 0; i < routes.length; i += 1) {
		const route = routes[i];

		const match = route.pattern.exec(path);
		if (match) {
			const query = Object.create(null);
			if (url.search.length > 0) {
				url.search.slice(1).split('&').forEach(searchParam => {
					let [, key, value] = /([^=]*)(?:=(.*))?/.exec(decodeURIComponent(searchParam));
					value = (value || '').replace(/\+/g, ' ');
					if (typeof query[key] === 'string') query[key] = [query[key]];
					if (typeof query[key] === 'object') (query[key] ).push(value);
					else query[key] = value;
				});
			}

			const part = route.parts[route.parts.length - 1];
			const params = part.params ? part.params(match) : {};

			const page = { path, query, params };

			return { href: url.href, route, match, page };
		}
	}
}

function scroll_state() {
	return {
		x: pageXOffset,
		y: pageYOffset
	};
}

async function navigate(target, id, noscroll, hash) {
	if (id) {
		// popstate or initial navigation
		cid = id;
	} else {
		const current_scroll = scroll_state();

		// clicked on a link. preserve scroll state
		scroll_history[cid] = current_scroll;

		id = cid = ++uid;
		scroll_history[cid] = noscroll ? current_scroll : { x: 0, y: 0 };
	}

	cid = id;

	if (root_component) stores.preloading.set(true);

	const loaded = prefetching && prefetching.href === target.href ?
		prefetching.promise :
		hydrate_target(target);

	prefetching = null;

	const token = current_token = {};
	const { redirect, props, branch } = await loaded;
	if (token !== current_token) return; // a secondary navigation happened while we were loading

	await render(redirect, branch, props, target.page);
	if (document.activeElement) document.activeElement.blur();

	if (!noscroll) {
		let scroll = scroll_history[id];

		if (hash) {
			// scroll is an element id (from a hash), we need to compute y.
			const deep_linked = document.getElementById(hash.slice(1));

			if (deep_linked) {
				scroll = {
					x: 0,
					y: deep_linked.getBoundingClientRect().top
				};
			}
		}

		scroll_history[cid] = scroll;
		if (scroll) scrollTo(scroll.x, scroll.y);
	}
}

async function render(redirect, branch, props, page) {
	if (redirect) return goto(redirect.location, { replaceState: true });

	stores.page.set(page);
	stores.preloading.set(false);

	if (root_component) {
		root_component.$set(props);
	} else {
		props.session = session;
		props.level0 = {
			props: await root_preloaded
		};

		// first load — remove SSR'd <head> contents
		const start = document.querySelector('#sapper-head-start');
		const end = document.querySelector('#sapper-head-end');

		if (start && end) {
			while (start.nextSibling !== end) detach(start.nextSibling);
			detach(start);
			detach(end);
		}

		root_component = new App({
			target,
			props,
			hydrate: true
		});
	}

	current_branch = branch;
	ready = true;
	session_dirty = false;
}

async function hydrate_target(target)



 {
	const { route, page } = target;
	const segments = page.path.split('/').filter(Boolean);

	let redirect = null;

	const props = { error: null, status: 200, segments: [segments[0]] };

	const preload_context = {
		fetch: (url, opts) => fetch(url, opts),
		redirect: (statusCode, location) => {
			if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
				throw new Error(`Conflicting redirects`);
			}
			redirect = { statusCode, location };
		},
		error: (status, error) => {
			props.error = typeof error === 'string' ? new Error(error) : error;
			props.status = status;
		}
	};

	if (!root_preloaded) {
		root_preloaded = initial_data.preloaded[0] || preload.call(preload_context, {
			path: page.path,
			query: page.query,
			params: {}
		}, $session);
	}

	let branch;
	let l = 1;

	try {
		branch = await Promise.all(route.parts.map(async (part, i) => {
			props.segments[l] = segments[i + 1]; // TODO make this less confusing
			if (!part) return null;

			const j = l++;

			const segment = segments[i];
			if (!session_dirty && current_branch[i] && current_branch[i].segment === segment) return current_branch[i];

			const { default: component, preload } = await load_component(components[part.i]);

			let preloaded;
			if (ready || !initial_data.preloaded[i + 1]) {
				preloaded = preload
					? await preload.call(preload_context, {
						path: page.path,
						query: page.query,
						params: part.params ? part.params(target.match) : {}
					}, $session)
					: {};
			} else {
				preloaded = initial_data.preloaded[i + 1];
			}

			return (props[`level${j}`] = { component, props: preloaded, segment });
		}));
	} catch (error) {
		props.error = error;
		props.status = 500;
		branch = [];
	}

	return { redirect, props, branch };
}

function load_css(chunk) {
	const href = `client/${chunk}`;
	if (document.querySelector(`link[href="${href}"]`)) return;

	return new Promise((fulfil, reject) => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = href;

		link.onload = () => fulfil();
		link.onerror = reject;

		document.head.appendChild(link);
	});
}

function load_component(component)


 {
	// TODO this is temporary — once placeholders are
	// always rewritten, scratch the ternary
	const promises = (typeof component.css === 'string' ? [] : component.css.map(load_css));
	promises.unshift(component.js());
	return Promise.all(promises).then(values => values[0]);
}

function detach(node) {
	node.parentNode.removeChild(node);
}

function prefetch(href) {
	const target = select_target(new URL(href, document.baseURI));

	if (target) {
		if (!prefetching || href !== prefetching.href) {
			set_prefetching(href, hydrate_target(target));
		}

		return prefetching.promise;
	}
}

function start(opts

) {
	if ('scrollRestoration' in _history) {
		_history.scrollRestoration = 'manual';
	}

	set_target(opts.target);

	addEventListener('click', handle_click);
	addEventListener('popstate', handle_popstate);

	// prefetch
	addEventListener('touchstart', trigger_prefetch);
	addEventListener('mousemove', handle_mousemove);

	return Promise.resolve().then(() => {
		const { hash, href } = location;

		_history.replaceState({ id: uid }, '', href);

		if (!initial_data.error) {
			const target = select_target(new URL(location.href));
			if (target) return navigate(target, uid, false, hash);
		}
	});
}

let mousemove_timeout;

function handle_mousemove(event) {
	clearTimeout(mousemove_timeout);
	mousemove_timeout = setTimeout(() => {
		trigger_prefetch(event);
	}, 20);
}

function trigger_prefetch(event) {
	const a = find_anchor(event.target);
	if (!a || a.rel !== 'prefetch') return;

	prefetch(a.href);
}

function handle_click(event) {
	// Adapted from https://github.com/visionmedia/page.js
	// MIT license https://github.com/visionmedia/page.js#license
	if (which(event) !== 1) return;
	if (event.metaKey || event.ctrlKey || event.shiftKey) return;
	if (event.defaultPrevented) return;

	const a = find_anchor(event.target);
	if (!a) return;

	if (!a.href) return;

	// check if link is inside an svg
	// in this case, both href and target are always inside an object
	const svg = typeof a.href === 'object' && a.href.constructor.name === 'SVGAnimatedString';
	const href = String(svg ? (a).href.baseVal : a.href);

	if (href === location.href) {
		if (!location.hash) event.preventDefault();
		return;
	}

	// Ignore if tag has
	// 1. 'download' attribute
	// 2. rel='external' attribute
	if (a.hasAttribute('download') || a.getAttribute('rel') === 'external') return;

	// Ignore if <a> has a target
	if (svg ? (a).target.baseVal : a.target) return;

	const url = new URL(href);

	// Don't handle hash changes
	if (url.pathname === location.pathname && url.search === location.search) return;

	const target = select_target(url);
	if (target) {
		const noscroll = a.hasAttribute('sapper-noscroll');
		navigate(target, null, noscroll, url.hash);
		event.preventDefault();
		_history.pushState({ id: cid }, '', url.href);
	}
}

function which(event) {
	return event.which === null ? event.button : event.which;
}

function find_anchor(node) {
	while (node && node.nodeName.toUpperCase() !== 'A') node = node.parentNode; // SVG <a> elements have a lowercase name
	return node;
}

function handle_popstate(event) {
	scroll_history[cid] = scroll_state();

	if (event.state) {
		const url = new URL(location.href);
		const target = select_target(url);
		if (target) {
			navigate(target, event.state.id);
		} else {
			location.href = location.href;
		}
	} else {
		// hashchange
		set_uid(uid + 1);
		set_cid(uid);
		_history.replaceState({ id: cid }, '', location.href);
	}
}

start({
	target: document.querySelector('#sapper')
});
