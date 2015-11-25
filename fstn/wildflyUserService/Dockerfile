FROM alizarion/centos7java8:latest

# Set the WILDFLY_VERSION env variable
ENV WILDFLY_VERSION 8.2.1.Final
ENV WILDFLY_SHA1 75738379f726c865d41e544e9b61f7b27d2853c7
ENV JBOSS_HOME /opt/jboss/wildfly

RUN mkdir -p /opt/jboss/
# Add the WildFly distribution to /opt, and make wildfly the owner of the extracted tar content
# Make sure the distribution is available from a well-known place
RUN cd $HOME \
    && curl -O https://download.jboss.org/wildfly/$WILDFLY_VERSION/wildfly-$WILDFLY_VERSION.tar.gz 
RUN   cd $HOME \
    && tar xf wildfly-$WILDFLY_VERSION.tar.gz 
RUN   cd $HOME \
    && mv $HOME/wildfly-$WILDFLY_VERSION $JBOSS_HOME 
RUN   cd $HOME \
    && rm $HOME/wildfly-$WILDFLY_VERSION.tar.gz

# Ensure signals are forwarded to the JVM process correctly for graceful shutdown
ENV LAUNCH_JBOSS_IN_BACKGROUND true

# Expose the ports we're interested in
EXPOSE 8080

# Set the default command to run on boot
# This will boot WildFly in the standalone mode and bind to all interface
CMD ["/opt/jboss/wildfly/bin/standalone.sh", "-b", "0.0.0.0"]

ADD custom /opt/jboss/wildfly/custom/

RUN chmod +x /opt/jboss/wildfly/custom/custom.sh

CMD ["/opt/jboss/wildfly/custom/custom.sh"]

