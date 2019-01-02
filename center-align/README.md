# Center Align layout component for Oracle JET 

JET  version : 5.0.0 and above

## Slot
Comes with a "slot" named : centered

All your HTML/JET components goes inside that to make them center aligned.

## Usage
Put the complete code base inside "\src\js\jet-composites"

The to use it in view : 

```
	<center-align>
		<div slot="centered">
			Center aligned content.
		</div>
	</center-align>
```

More examples

```
	<center-align>
		<div slot="centered">
			  <oj-form-layout>
				<oj-input-text id="username" value="{{username}}" label-hint="User"></oj-input-text>
				<oj-input-text id="password" value="{{password}}" label-hint="Password"></oj-input-text>
				<oj-button id="inputButton" on-oj-action="[[login]]" class="oj-button-primary" chroming="full">Login</oj-button>
			</oj-form-layout>
		</div>
	</center-align>
```

##Blog

