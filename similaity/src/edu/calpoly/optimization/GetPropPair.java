package edu.calpoly.optimization;

public class GetPropPair {
	
	private String object;
	private String property;
	
	// Constructor
	public GetPropPair (String object, String property) {
		this.object = object;
		this.property = property;
	}
	
	// Default Constructor
	public GetPropPair () {
		//Nothing
	}

	public String getObject() {
		return object;
	}

	public void setObject(String object) {
		this.object = object;
	}

	public String getProperty() {
		return property;
	}

	public void setProperty(String property) {
		this.property = property;
	}
}
